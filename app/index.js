import config from "./config.js";
import express from "express";

const app = express();

app.get('/', (_, res) =>{
    res.send("Hello World");
})

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
});