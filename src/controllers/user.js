import { User } from './../db/models';
export async function createUser(req, res, next) {
  try {
    const created_user = await User.create(req.body);
    if (created_user) {
      return res.status(201).send(created_user);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}
