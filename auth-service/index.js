import express from "express";
import connectDB from "./db/connectDB.js";
import router from "./router/router.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Auth Service is running at port 3001</h1>")
})

app.use("/api/user", router);

app.listen(3001, async () => { 
    console.log("Server is running at http://localhost:3001");
    await connectDB();
})
