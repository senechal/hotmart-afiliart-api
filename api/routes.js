import { productsPOST, productsGET } from './views';


export default function server(app) {
  app.route('/products').post(productsPOST);
  app.route('/products').get(productsGET);
}
