import { Schema, model } from "mongoose";

const pharmacySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      riquired: true,
    },
    address: {
      type: String,
      trim: true,
      riquired: true,
    },
    city: {
      type: String,
      trim: true,
      riquired: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    rating: {
      type: String,
      trim: true,
    },
  },
);

export const Pharmacy = model('Pharmacy', pharmacySchema);
