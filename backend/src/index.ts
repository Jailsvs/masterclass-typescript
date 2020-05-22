import  express from 'express'; //yarn add #types/express
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(routes);
app.use(cors());

app.listen(3333);