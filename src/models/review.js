import { Schema, model } from "mongoose";

const reviewSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      riquired: true,
    },
    testimonial: {
      type: String,
      trim: true,
    },
  },
);

export const Review = model('Review', reviewSchema);
