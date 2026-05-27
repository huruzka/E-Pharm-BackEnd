import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    id: {
      type: String,
      trim: true,
      riquired: true,
    },
    photo: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
      riquired: true,
    },
    suppliers: {
      type: String,
      trim: true,
      riquired: true,
    },
    stock: {
      type: String,
      trim: true,
    },
    price: {
      type: String,
      trim: true,
      riquired: true,
    },
    category: {
      type: String,
      trim: true,
      riquired: true,
    },
  },
);

export const Product = model('Producr', productSchema);
