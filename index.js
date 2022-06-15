import express from 'express';
const router = express.Router();
const routes = '.router/person';



const app = express();

app.use(express.json());

app.use('/', routes);

app.listen(8080, () => {
    console.log('Testing')
});