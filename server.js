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
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

/* Health check */
app.get("/", (req, res) => {
    res.send("Admin service running");
});

/* Version / compatibility endpoint */
app.get("/service-info", (req, res) => {
    try {
        const filePath = path.join(__dirname, "compatibility.json");
        const data = fs.readFileSync(filePath, "utf-8");
        res.setHeader("Content-Type", "application/json");
        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "compatibility.json missing" });
    }
});

app.listen(PORT, () => {
    console.log(`Admin service running on ${PORT}`);
});
