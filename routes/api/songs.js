const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');



var fs = require('fs');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload/')
    },
    filename: function (req, file, callback) {
        var str = '';
        // str = file.originalname.substring(str.indexOf(".") + 1);
        // console.log(str)
        // console.log(file)
        console.log(file)
        callback(null, file.originalname)
    }
})

const fileFilter = (req, file, callback) => {
    //reject these as file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        callback(null, true);
    }
    else {
        callback(new  Error('Only jpeg or png are allowed. '), false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter,
});
const Song = require('../../models/SongOld');
const Post = require('../../models/Post');
const verify = require('../../verifyToken');

// router.get("/songs", (req, res, next) => {
//     Song.find()
//         .select("name price _id photo")
//         .exec()
//         .then(docs => {
//             const response = {
//                 count: docs.length,
//                 songs: docs.map(doc => {
//                     return {
//                         name: doc.name,
//                         singer: doc.singer,
//                         photo: doc.photo,
//                         _id: doc._id,
//                         request: {
//                             type: "GET",
//                             url: "http://localhost:5000/api/songs/" + doc._id
//                         }
//                     };
//                 })
//             };
//             //   if (docs.length >= 0) {
//             res.status(200).json(response);
//             //   } else {
//             //       res.status(404).json({
//             //           message: 'No entries found'
//             //       });
//             //   }
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             });
//         });
// });
router.get('/songs',async (req,res, next)=>{

    console.log(' get songs')
    try {
        const  songs = await Song.find()
            .select('name singer _id photo')
            .exec()
        res.json(songs);
    }catch (e) {
         res.json({message:e});
    }
});

router.post('/songs', upload.single('photo') ,async (req, res, next) => {

    // console.log('photo\' name:')
    // console.log(req.file.filename)
    // req.file.filename= req.body.name+ '.png'
    // console.log('photo\' name2:')
    // console.log(req.file.filename)
    let address = req.file.path;
    // address.replace('\', '/')
    console.log('address')
    console.log(address)

    const song = new Song({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        singer: req.body.singer,
        photo: req.file.path
    });



    console.log('saving photo name')
    console.log(song.photo)
    song
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Created song successfuly",
                createProduct: {
                    name: result.name,
                    singer: result.singer,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:5000/api/songs/'+result.photo.replace('\\', '')
                    }
                }
            })
            console.log('after');
            console.log(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})

// Upload Endpoint
// router.post('/images', (req, res) => {
//     if(req.files == null) {
//         return res.status(400).json({message: 'No file was uploaded'})
//     }
//     const file = req.files.file
//
//     file.mv(`http://localhost:5000/uploads/`,
//         err => {
//             if (err) {
//                 console.error(err)
//                 return res.status(500).send(err)
//             }
//             res.json({fileName: file.name, filePath: `/upload/${file.name}`})
//         })
//
//
//
// })



module.exports = router;