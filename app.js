import express from 'express';
import sampleRouter from './routes/sample.routes';
import { helloWorld } from './services/sample.service';

const app = express();

app.use(sampleRouter);

app.listen(3000, helloWorld);
