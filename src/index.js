import express from 'express';
import { User } from './db/models';
import router from './routes';

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(router);

/*
//параментры 1- адрес (/ корень проекта), 2 - функция обработки данных, в ней объект запроса и объект ответа
app.post('/user', async (req, res, next) => {
  try {
    const createdUser = await User.create(req.body);
    return res.send(createdUser);
    //console.log(req.body);
  } catch (e) {
    next(e);
  }
});

app.use((err, req, res) => {
  res.status(500).send('Smth broken!');
});
*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
