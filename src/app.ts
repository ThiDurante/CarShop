import express from 'express';
import carRouter from './router/carRoute';
// import motorcycleRouter from './router/motorcycleRoute';

const app = express();

app.use(express.json());
app.use('/cars', carRouter);
// app.use('/motorcycles', motorcycleRouter);

export default app;
