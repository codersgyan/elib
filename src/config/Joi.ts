import Joi, { SchemaMap } from "joi";

// Define the shape of the schema object
type RegistrationSchema = {
    name: string;
    email: string;
    password: string;
};

type LoginSchema = {
    email: string;
    password: string;
};

// Create the Joi validation schema
const SignupSchema: SchemaMap<RegistrationSchema> = {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6).max(15),
};

const loginSchema: SchemaMap<LoginSchema> = {
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6).max(15),
};

export { SignupSchema, loginSchema };
