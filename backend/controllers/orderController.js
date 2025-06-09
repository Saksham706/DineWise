import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing user order for frontend
const placeOrder = async (req, res) => {
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
            payment: true, // Directly mark as paid since no payment gateway
        });

        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        res.json({ success: true, message: "Order placed successfully", orderId: newOrder._id });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error placing order" });
    }
};

// Verify the order from the frontend 
const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
    try {
        if (success === "false") {
            await orderModel.findByIdAndUpdate(orderId, { payment: false });
            res.json({ success: true, message: "Order marked as unpaid" });
        } else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false, message: "Order cancelled" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error verifying order" });
    }
};

// User order for frontend
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching user orders" });
    }
};

// Listing orders for admin panel
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error listing orders" });
    }
};

// API for updating order status
const updateStatus = async (req, res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
        res.json({ success: true, message: "Status updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error updating status" });
    }
};

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };
