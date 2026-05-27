import { Schema, model } from 'mongoose';

const nearestPharmacySchema = new Schema(
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
      riquired: true,
    },
    rating: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true
  },
);

export const NearestPharmacy = model('NearestPharmacy', nearestPharmacySchema);
