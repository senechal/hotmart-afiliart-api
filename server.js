import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './api/routes';

(function server() {
  const app = express();
  const port = process.env.PORT || 3000;
  const host = '0.0.0.0';
  const dbhost = process.env.DB_HOST || 'mongodb://localhost:27017/hotmart';

  const promise = mongoose.connect(dbhost, {
    useMongoClient: true,
  });
  promise.then(() => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    routes(app);
    app.listen(port, host);

    console.log(`API server started on: ${port}`);
  });
}());
