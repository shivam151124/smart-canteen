import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import path from "path"
import { fileURLToPath } from 'url'

// Get directory name for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//app config
const app = express()
const port = process.env.PORT || 4000

//middleware
app.use(express.json())
app.use(cors({
    origin: [
        process.env.FRONTEND_URL || "http://localhost:5173",
        process.env.ADMIN_URL || "http://localhost:5174"
    ],
    credentials: true
}))

// db connection
connectDB();

// api endpoints (these must come BEFORE static file serving)
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads')) 
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

// Serve static files for frontend and admin
if (process.env.NODE_ENV === 'production') {
    // Serve static files
    app.use(express.static(path.join(__dirname, 'public')))
    app.use('/admin', express.static(path.join(__dirname, 'public/admin')))
    
    // Handle admin routes
    app.get('/admin', (req, res) => {
        res.sendFile(path.join(__dirname, 'public/admin/index.html'))
    })
    
    // Handle all other routes (frontend SPA)
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public/index.html'))
    })
} else {
    app.get("/",(req,res)=>{
        res.send("API Working")
    })
}

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

