import { Schema, model } from 'mongoose';

const incomeExpenseSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    amount: {
      type: String,
      trim: true,
      required: true,
    },
    type: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true
  },
);

export const IncomeExpense = model('IncomeExpense', incomeExpenseSchema);
