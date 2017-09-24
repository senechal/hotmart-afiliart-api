import Product from './models';

export const productsPOST = (req, res) => {
  const rawObject = req.body || JSON.parse(req.bodyAsString);
  const product = new Product(Object.assign(rawObject, { requested: false }));
  console.log(JSON.stringify(rawObject));
  product.save();
  return res.json({ message: 'OK' });
};

export const productsGET = (req, res) => {
  const query = Product.find({ requested: false });
  query.exec((err, products) => {
    if (err) {
      return res.json({ message: 'ERROR' });
    }
    products.forEach((item) => {
      const product = item;
      product.requested = true;
      product.save();
    });
    return res.json(products);
  });
};
