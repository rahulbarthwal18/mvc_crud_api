const Joi = require('@hapi/joi');

const employeeSchema = Joi.object({
    profile_image: Joi.optional(),
    first_name: Joi.string().min(3).max(50).required(),
    last_name: Joi.string().min(3).max(50).optional(),
    email:Joi.string().email().required(),
    password:Joi.string().required(),
    sallary:Joi.number().integer().min(4).required(),
    dept: Joi.number().integer().required()

});
const departmentSchema = Joi.object({
    name: Joi.string().max(50).required(),

});

module.exports = {
    employeeSchema,
    departmentSchema,
}