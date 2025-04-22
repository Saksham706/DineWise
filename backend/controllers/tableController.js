import tableModel from '../models/tableModel.js';
import userModel from "../models/userModel.js"

// Create a new table booking (POST)
export const createTable = async (req, res) => {
    try {
        const newTable = new tableModel({
            userId: req.body.userId,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            date: req.body.date,
            time: req.body.time,
            request: req.body.request
        });
        await newTable.save();
        res.status(201).json({ message: 'Booking created successfully', data: newTable });
    } catch (error) {
        res.status(500).json({ message: 'Error creating booking', error });
    }
};


// Get all bookings (GET)
export const getAllTables = async (req, res) => {
    try {
        const tables = await tableModel.find();
        res.status(200).json(tables);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings', error });
    }
};

