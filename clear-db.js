import mongoose from 'mongoose';
import fs from 'fs';

import Product from './api/models';

const currTime = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; // January is 0!

  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  return `${dd}-${mm}-${yyyy}`;
};

const saveFile = (json) => {
  if (!fs.existsSync('backup/')) {
    fs.mkdirSync('backup/');
  }
  fs.writeFile(`backup/${currTime()}.json`, JSON.stringify(json), 'utf8', (err) => {
    if (err) {
      console.log('Unable to save file.');
    }
  });
};

(() => {
  const dbhost = process.env.DB_HOST || 'mongodb://localhost:27017/hotmart';
  const promise = mongoose.connect(dbhost, {
    useMongoClient: true,
  });
  console.log('Starting backup.');
  promise.then(() => {
    const query = Product.find();
    query.exec((err, products) => {
      if (err) {
        console.log('Unable to load products.');
      }
      saveFile(products);
      products.forEach((item) => {
        const product = item;
        product.remove();
      });
      console.log('Backup concluded');
    });
  });
  mongoose.disconnect();
})();
