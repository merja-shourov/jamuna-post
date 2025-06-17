import express from 'express';
import dotenv from 'dotenv'
const app = express();

dotenv.config();
const port = process.env.PORT || 5000;
app.use(express.json());

// Routes
app.get("/", (req, res)=>{
    res.send("API running...");
})

// Listen
app.listen(port, ()=>{
    console.log(`server running on "http://localhost:${port}"`);
})