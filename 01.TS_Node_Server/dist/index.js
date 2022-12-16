"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.use("/", (req, res) => {
    res.send("OK");
});
app.listen(3000, () => {
    console.log("Server Start");
});
//# sourceMappingURL=index.js.map