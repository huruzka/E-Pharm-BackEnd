import { Schema, model } from 'mongoose';


const customerSchema = new Schema({
  photo: {
    type: String,
  },
  name: {
    type: String,
    required: true,
    trim: true, //прибирає пробіли на початку і в кінці
  },
  email: {
    type: String,
    riquired: true,
    trim: true,
  },
  spent: {
    type: String,
  },
  phone: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  register_date: {
    type: String,
  },
},
  {
    timestamps: true
  },
);

export const Customer = model('Customer', customerSchema);
