import "reflect-metadata";
import express from "express";
import "./database"
import { router } from "./routes";
const bp = require('body-parser')

const app = express();
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(router);
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running");
});