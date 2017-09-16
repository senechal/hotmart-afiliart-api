import mongoose from 'mongoose';


const ProductsSchema = new mongoose.Schema({
  requested: Boolean,
  aff: String,
  productOfferPaymentMode: String,
  aff_name: String,
  prod: String,
  original_offer_price: String,
  currency_code_from_: String,
  src: String,
  hottok: String,
  producer_legal_nature: String,
  transaction_ext: String,
  payment_engine: String,
  prod_name: String,
  receiver_type: String,
  payment_type: String,
  currency_code_from: String,
  callback_type: String,
  producer_name: String,
  xcod: String,
  warranty_date: String,
  producer_document: String,
  purchase_date: String,
  transaction: String,
  status: String,
});


export default mongoose.model('Products', ProductsSchema);
