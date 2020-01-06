const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');
const verify = require('../../verifyToken');

router.get('/posts', verify,async (req,res)=>{

    console.log('postssssss')
    try {
        const  posts = await Post.find();
        res.json(posts);
    }catch (e) {
        res.json({message:e});
    }
});

// //todo make this async
// router.post('/posts', verify,(req,res)=>{
//     console.log('wtffff')
//     const post = new Post({
//         title:req.body.title,
//         description:req.body.description,
//     });
//
//     post.save()
//         .then(data =>{
//             res.json(data);
//         })
//         .catch(err =>{
//             res.json({message:err});
//     });
// });


router.get('/posts2', verify ,async (req,res)=>{
    res.json('new secure route')
    // try {
    //     const  posts = await Post.find();
    //     res.json(posts);
    // }catch (e) {
    //     res.json({message:e});
    // }
});

router.get('/onlylogged', verify,async (req,res)=>{
    try {
        const  posts = await Post.find();
        res.json(posts);
    }catch (e) {
        res.json({message:e});
    }
});

module.exports = router;