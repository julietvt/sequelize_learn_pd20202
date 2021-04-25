import { userSchema } from '../../utils/validation/user.js';

export default async function validateUser(req, res, next) {
  try {
    if (req.method.toUpperCase() === 'POST') {
      req.body = await userSchema.validateAsync(req.body);
    }
    next();
  } catch (e) {
    next(e);
  }
}
