import { Router } from 'express';

export const sampleRouter = Router();

sampleRouter.get('/', (req, res) => {
  res.send('Hello World');
});
