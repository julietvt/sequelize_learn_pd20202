import Joi from '@hapi/joi';

export default Joi.object({
  firstName: Joi.string()
    .pattern(/^[A-Z][a-z]{0,63}$/)
    .required(),
  lastName: Joi.string()
    .pattern(/^[A-Z][a-z]{0,63}$/)
    .required(),
  email: Joi.string().email(),
  login: Joi.string().required(),
});
