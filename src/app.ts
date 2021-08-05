import cors from 'cors';
import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.use(cors());
app.use(express.json());

// default request
app.get('/', (_req: Request, res: Response) => {
  return res.status(200).json({ message: 'OK' });
});

export { app };
