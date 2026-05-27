import { Schema, model } from 'mongoose';

const orderSchema = new Schema(
  {
    photo: {
      type: String,
      trim: true,
    },
    nema: {
      type: String,
      trim: true,
      riquired: true,
    },
    address: {
      type: String,
      trim: true,
      riquired: true,
    },
    products: {
      type: String,
      trim: true,
    },
    price: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
    },
    order_date: {
      type: String,
      trim: true,
      riquired: true,
    },
  },
);

export const Order = model('Order', orderSchema);


