import {Transaction} from '../model/transaction.js';

export const createTransaction = async (req, res) => {
    try {
        const { amount, category, description } = req.body; 

        const transaction = await Transaction.create({ 
            amount,
            category,
            description
         });
         console.log("Transaction created:", transaction);
        res.status(201).json({
            message: "Transaction created successfully",
            transaction
        });
    } 
        catch (error) {
        res.status(500).json({
            message: error.message});
        }
    };

    export const getTransactions = async (req, res) => {
        try {
            const transactions = await Transaction.find();

            res.status(200).json({
                message: "Transactions retrieved successfully",
                transactions
            });
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    };

    export const deleteTransaction = async (req, res) => {
        const { id } = req.body;

        try {
            const transaction = await Transaction.findByIdAndDelete(id);
            if (!transaction) {
                return res.status(404).json({ message: "Transaction not found" });
            }
            res.status(200).json({ message: "Transaction deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    export const updateTransaction = async (req, res) => {
        const { id, amount, category, description } = req.body;

        try {
            const transaction = await Transaction.findByIdAndUpdate(id, { amount, category, description }, { new: true });
            if (!transaction) {
                return res.status(404).json({ message: "Transaction not found" });
            }
            res.status(200).json({ message: "Transaction updated successfully", transaction });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
    