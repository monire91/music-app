const Joi = require('joi');

const registerValidation =(data)=>{
    const schema = {
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required(),

    };

    return  Joi.validate(data,schema);
};

const signinValidation = (data) => {
    const schema =  {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
    return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.signinValidation = signinValidation;
