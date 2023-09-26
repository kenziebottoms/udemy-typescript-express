import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes/loginRoutes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(3001, () => {
  console.log('listening on port 3001');
});
