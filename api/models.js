import mongoose from 'mongoose';


const ProductsSchema = new mongoose.Schema({
  requested: Boolean,
  hottok: String,*
  prod: String,
  prod_name: String,
  off: String,
  price: String,
  aff: String,
  aff_name: String,
  email: String,
  name: String,
  first_name: String,
  last_name: String,
  doc: String,
  phone_local_code: String,
  phone_number: String,
  address: String,
  address_number: String,
  address_country: String,
  address_district: String,
  address_comp: String,
  address_city: String,
  address_state: String,
  address_zip_code: String,
  transaction: String,
  xcod: String,
  src: String,
  status: String,
  payment_engine: String,
  payment_type: String,
  hotkey: String,
  name_subscription_plan: String,
  subscriber_code: String,
  recurrency_period: String,
  recurrency: String,
  cms_marketplace: String,
  cms_vendor: String,
  cms_aff: String,
  callback_type: String,
  subscription_status: String,
  transaction_ext: String,
  sck: String,
  purchase_date: String,
  confirmation_purchase_date: String,
  billet_url: String,
  currency_code_from: String,
  original_offer_price: String,
  currency: String,
  signature_status: String,
  billet_barcode: String,
  producer_name: String,
  producer_document: String,
  producer_legal_nature: String,
  currency_code_from_: String,
  refusal_reason: String,
  doc_type: String,
  full_price: String,
  warranty_date: String,
  cms_aff_currency: String,
  product_support_email: String,
  amount: String,
});


export default mongoose.model('Products', ProductsSchema);
