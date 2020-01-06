// const express = require('express')
// const router = express.Router();
// const mongoose = require('mongoose');
// const fileUpload = require('express-fileupload')
//
// const app = express()
// fileUpload()
//
// // Upload Endpoint
// router.post('/images', (req, res) => {
//     if(req.files == null) {
//         return res.status(400).json({message: 'No file was uploaded'})
//     }
//     const file = req.files.file
//
//     file.mv(`http://localhost:3000/public/upload/${file.name}`,
//         err => {
//             if (err) {
//                 console.error(err)
//                 return res.status(500).send(err)
//             }
//             res.json({fileName: file.name, filePath: `/uploads/${file.name}`})
//         })
//
//
//
// })