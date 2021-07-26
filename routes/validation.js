const loginValidation = data => {
    const schema = {


      email: Joi.string()
      .min(6)
      .required(),

      password: Joi.string()
      .min(6)
      .required()
    };
    return Joi.validate(data, schema)
}

module.exports.loginValidation = loginValidation;