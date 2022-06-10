import Joi = require('joi');
export const CreateCatChema = Joi.object({
    name: Joi.string().max(20).required(),
    age: Joi.number().max(120),
    breed: Joi.string().max(20)
});
