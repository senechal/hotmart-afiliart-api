import Product from './models';
import token from './token';

export const productsPOST = (req, res) => {
  const rawObject = req.body || JSON.parse(req.bodyAsString);
  if (token === rawObject.hottok) {
    const product = new Product(Object.assign(rawObject, { requested: false }));
    product.save();
    return res.json({ message: 'OK' });
  }
  return res.status(403).send({ message: 'WRONG TOKEN' });
};

export const productsGET = (req, res) => {
  const query = Product.find({ requested: false });
  query.exec((err, products) => {
    if (err) {
      return res.status(500).send({ message: 'ERROR' });
    }
    products.forEach((item) => {
      const product = item;
      product.requested = true;
      product.save();
    });
    return res.json(products);
  });
};
