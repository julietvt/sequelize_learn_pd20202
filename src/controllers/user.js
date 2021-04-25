import { User } from './../db/models';
export async function createUser(req, res, next) {
  try {
    const created_user = await User.create(req.body);
    if (created_user) {
      const user_data = created_user.get();
      delete user_data.password;
      return res.status(201).send(user_data);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}
