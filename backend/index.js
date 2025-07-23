import express from "express";
import cors from "cors";
import { db } from "./database.js";
const app = express();

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Lionel Messi")
    
})

app.listen(3000, () => {
 console.log("http://localhost:3000/");
});
