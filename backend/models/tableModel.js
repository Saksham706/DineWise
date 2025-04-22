import mongoose from 'mongoose'

const tableSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    name: { type: String, required: true },
    email: { type: String, required: true },  
    phone: { type: String, required: true },  
    date: { type: String, required: true },  
    time: { type: String, required: true },   
    request: { type: String }
});

const tableModel = mongoose.models.table || mongoose.model("table", tableSchema)

export default tableModel;