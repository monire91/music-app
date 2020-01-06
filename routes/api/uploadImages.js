const express = require('express');
const Song = require('../../models/Song');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './')
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
});

const fileFilter = (req, file, callback) => {
    console.log(file.mimetype)
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        callback(null, true);
    }
    else {
        callback(new Error('Only jpeg or png files are allowed. '), false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter,
});
router.get('/', async (req,res)=>{

    console.log('imagesssss')
    try {
        const  songs = await Song.find();
            // .select('name')
            // .exec()
        res.json(songs);
    }catch (e) {
        res.json({message:e});
    }
});
router.post("/addSong", upload.single("songURL"), (req, res, next) => {

    // console.log(req)

    var array = req.file.path.split(".");
    const fileFormat = '.' + array[array.length - 1];

    const newPath = 'upload/songs/' + Date.now() + fileFormat;

    const fs = require('fs');
    fs.rename(req.file.path, newPath, function (err) {
        if (err) throw err;
        //console.log('File Renamed.');
    });

    const song = new Song({
        name: req.body.name,
        songURL: newPath
    });

    song.save().then(result => {
        res.status(201).json({
            message: "Song uploaded successfully!"
        });

    });
});

module.exports = router;