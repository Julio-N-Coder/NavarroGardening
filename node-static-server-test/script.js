import express from "express";
const app = express();

app.use(express.static("./out"));

app.listen(3000);
