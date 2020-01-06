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
    if (file.mimetype === 'audio/mpeg' || file.mimetype === 'audio/mp3') {
        callback(null, true);
    }
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        callback(null, true);
    } else {
        callback(new Error('Only audio files are allowed. '), false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 15
    },
    // fileFilter: fileFilter
});
router.get('/showSongs', async (req, res) => {

    console.log('postssssss')
    try {
        const songs = await Song.find();
        // .select('name')
        // .exec()
        res.json(songs);
    } catch (e) {
        res.json({message: e});
    }
});
var cpUpload = upload.fields([{name: "songURL", maxCount: 1}, {name: "imageURL", maxCount: 1}])
router.post("/addSong", cpUpload, (req, res, next) => {

    console.log(req.files)
    console.log('domdom')



    if (req.files.imageURL[0].fieldname === 'imageURL') {
        if (req.files.imageURL[0].mimetype === 'image/jpeg' || req.files.imageURL[0].mimetype === 'image/png') {
            console.log('image format is ok')
        } else {
            console.log('image format is invalid')
        }
    }

    if (req.files.songURL[0].fieldname === 'songURL') {
        if (req.files.songURL[0].mimetype === 'audio/mpeg' || req.files.songURL[0].mimetype === 'audio/mp3') {
            console.log('song format is ok')
        } else {
            console.log('song format is invalid')
        }
    }

    var array = req.files.songURL[0].path.split(".");
    const fileFormat = '.' + array[array.length - 1];

    const songPath = 'upload/songs/' + Date.now() + fileFormat;

    const fs = require('fs');
    fs.rename(req.files.songURL[0].path, songPath, function (err) {

        if (err) throw err;
        //console.log('File Renamed.');
        console.log('Song renamed and relocated');
    });

    var arrayP = req.files.imageURL[0].path.split(".");
    const imageFormat = '.' + arrayP[array.length - 1];
    const imagePath = 'upload/images/' + Date.now() + imageFormat;
    fs.rename(req.files.imageURL[0].path, imagePath, function (err) {

        if (err) throw err;
        //console.log('File Renamed.');
        console.log('image renamed and relocated');
    });


    const song = new Song({
        name: req.body.name,
        songURL: songPath,
        imageURL: imagePath
    });

    song.save().then(result => {
        res.status(201).json({
            message: "Song uploaded successfully!"
        });

    });
});

module.exports = router;