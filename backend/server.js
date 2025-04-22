import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import tableRoutes from './routes/tableRoute.js';


// app config
const app = express()
const port = 4000


// middleware
app.use(express.json())
app.use(cors())// access backend from any frontend

//db connection
connectDB();


// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('upload'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)
app.use('/api/tables', tableRoutes);


app.get("/",(req,res)=>{
    res.send("API Working")
})


// Run the express server
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})