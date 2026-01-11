import express from "express" 
import connectDB from "./db/connectDB.js";
import router from "./router/router.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Cart Service is running at port 3002</h1>");
})

app.use('/api/cart',router);

app.listen(3002, async () => {
    await connectDB();
    console.log("Server is running at http://localhost:3002");
})