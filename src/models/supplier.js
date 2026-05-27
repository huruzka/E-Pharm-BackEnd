import { Schema, model } from "mongoose";

const supplierSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      riquired: true,
    },
    address: {
      type: String,
      trim: true,
    },
    suppliers: {
      type: String,
      trim: true,
      riquired: true,
    },
    date: {
      type: String,
      trim: true,
    },
    amount: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
      riquired: true,
    },
  },
);

export const Supplier = model('Supplier', supplierSchema);
