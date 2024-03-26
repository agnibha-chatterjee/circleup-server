import { Router } from 'express';

const sampleRouter = Router();

sampleRouter.get('/', (req, res) => {
  res.send('Hello World');
});

export default sampleRouter;
