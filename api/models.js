import mongoose from 'mongoose';


const ProductsSchema = new mongoose.Schema({
  requested: Boolean,
  transaction_ext: String,
  receiver_type: String,
  price: String,
  sck: String,
  aff_name: String,
  original_offer_price: String,
  hottok: String,
  payment_type: String,
  has_co_production: String,
  xcod: String,
  warranty_date: String,
  name: String,
  doc: String,
  phone_number: String,
  purchase_date: String,
  status: String,
  phone_local_code: String,
  currency_code_from_: String,
  producer_legal_nature: String,
  doc_type: String,
  currency_code_from: String,
  cms_marketplace: String,
  currency: String,
  first_name: String,
  email: String,
  aff: String,
  cms_aff: String,
  productOfferPaymentMode: String,
  prod: String,
  src: String,
  last_name: String,
  payment_engine: String,
  prod_name: String,
  off: String,
  callback_type: String,
  producer_name: String,
  producer_document: String,
  transaction: String,
});


export default mongoose.model('Products', ProductsSchema);
