import 'dotenv/config';

import express from 'express';
import morgan from 'morgan';
import { sampleRouter } from './routes/sample.routes.js';
import { connectToMongo } from './db/mongo-connection.js';
import { checkIfEnvExists } from './utils/check-if-env-exists.js';

checkIfEnvExists();

const app = express();

connectToMongo();

app.use(morgan('combined'));
app.use('/api', sampleRouter);

const PORT = process.env.PORT || 3000;

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
