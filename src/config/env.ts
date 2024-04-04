import 'dotenv/config'

import * as Joi from 'joi';

interface EnvVars {
    PORT: number;
}

const envSchema = Joi.object({
    PORT: Joi.number().required(),
})
.unknown(true);

const { error, value } = envSchema.validate(process.env);

//console.log(error, envVars);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
    PORT: envVars.PORT,
}