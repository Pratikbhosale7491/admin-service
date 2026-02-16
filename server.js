const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 4000;

const serviceInfo = JSON.parse(fs.readFileSync("./compatibility.json"));

app.get("/service-info", (req, res) => {
    res.json(serviceInfo);
});

app.listen(PORT, () => {
    console.log(`Admin service running on ${PORT}`);
});
