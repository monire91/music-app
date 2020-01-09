const express = require('express');
const User = require('../../models/User');
const router = express.Router();
const {registerValidation, signinValidation} = require('../../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {

    const {error} = registerValidation(req.body);
    if (error) {
        return res.status(400).send({
            message: error.details[0].message
        })
    }

    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) {
        return res.status(400).send(
            {
                message: 'User with this mail already registered.'
            }
        );
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        email: req.body.email,
        password: hashPassword
    });

    try {
        const savedUser = await user.save();
        // const token = jwt.sign({_id: user._id}, 'secret_sdfsgsgssefasfsgsg');
        // // res.header('auth-token', token).send(token);
        res.send(savedUser);
    } catch (e) {
        res.status(400).send(e);
    }
});
router.post('/login', async (req, res) => {

    const {error} = signinValidation(req.body);
    if (error) {
        return res.status(400).send({message: error.details[0].message})
    }

    const user = await User.findOne({email: req.body.email});
    if (!user) {
        return res.status(400).send({message: 'Email or password is wrong.'});
    }

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) {
        return res.status(400).send({message: 'Password is wrong.'});
    }

    const token = jwt.sign({_id: user._id}, 'secret_sdfsgsgssefasfsgsg');
    const type = user.type;
    res.status(200).json({token,type})
});


module.exports = router;
