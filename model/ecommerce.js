import mongoose from "mongoose";
import validator from "validator";

const ecommerceSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: [true, "Product name is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  rating: [{
    type: Object,

    rate: {
      type: Number,
      required: [true, "Rating is required"],
      min: [0, "Rating cannot be negative"],
      max: [5, "Rating cannot be more than 5"],
    },  
    count: {
      type: Number,
      required: [true, "Rating count is required"],
    }
  }],
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Ecommerce = mongoose.model("Ecommerce", ecommerceSchema);