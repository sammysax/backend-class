import mongoose from 'mongoose';
import validator from 'validator';

const transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: [true, "Transaction amount is required"],
    },
    category: {
        type: String,
        required: [true, "Transaction category is required"],
        // enum: {
        //     values: ['income', 'expense'],
        //     message: "Transaction category must be either 'income' or 'expense'" 
        // }
    },
    description: {
        type: String,
        required: [true, "Transaction description is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Transaction = mongoose.model("Transaction", transactionSchema);