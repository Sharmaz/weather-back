import express from 'express';
import weatherRouter from './weather.router.js';

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/weather', weatherRouter);
}

export default routerApi;
