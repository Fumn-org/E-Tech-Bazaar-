const mongoose=require( "mongoose" );
// const validator=require( "validator" );

const orderSchema=new mongoose.Schema( {

  name: {
    type: String,
    trim: true
  },
  phone: {
    type: String,
    trim: true,
  },

  address: {
    type: String,
    trim: true,
  },

  date: {
    type: Date,
    default: Date.now()
  },
  totalPrice:Number,
  //**************** Embeded ************************** 
  products: [
    {
      name: String,
      price: Number,
      model: String,
      category: String,
      brand: String,
      color: String,
      condition: String,
      quantity:Number

    }
  ]




} );






const Order=mongoose.model( 'Order', orderSchema );
module.exports=Order;