// src/validation/students.js

import Joi from 'joi';

export const createStudentSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        "string.base": "Username should be a string",
        "string.min": "Username should have at least {#limit} characters",
        'string.max': 'Username should have at most {#limit} characters',
        'any.required': 'Username is required'

    }),
    year: Joi.number().integer().required(),
    gender: Joi.string().valid('male', 'female', 'other').required(),
    onDuty: Joi.boolean(),
});



export const updateStudentSchema = Joi.object({
    name: Joi.string().min(3).max(30),
    year: Joi.number().integer(),
    gender: Joi.string().valid('male', 'female', 'other'),
    onDuty: Joi.boolean(),
})