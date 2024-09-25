const Joi = require('joi');

const createProductSchema = Joi.object({
    name: Joi.string().required(),
    category: Joi.string().required()
});


const updateProductSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    category: Joi.string().required()
});

const deleteroductSchema = Joi.object({
    id: Joi.number().required()
});



module.exports = {
    createProductSchema,
    updateProductSchema,
    deleteroductSchema
}

