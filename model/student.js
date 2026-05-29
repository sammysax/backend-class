import mongoose from "mongoose";
import validator from "validator";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },

  email: {
    type: String,
    required: true,
    unique: [true, "Email already exists"],
    validate: [validator.isEmail, "Invalid email please provide a valid email"]
  },

  grade: {
    type: Number,
    required: true,
    enum: [1, 2, 3, 4, 5, 6]
  },

  age: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Student = mongoose.model("Student", studentSchema);