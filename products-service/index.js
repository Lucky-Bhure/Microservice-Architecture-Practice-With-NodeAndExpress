import express from "express"
import connectDB from "./db/connectDB.js";
import router from "./router/router.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send('<h1>Products Service is running at port 3003</h1>')
});

app.use("/api/product", router);



app.listen(3003,async () => {
    await connectDB();
    console.log("Server is running at http://localhost:3003")
})