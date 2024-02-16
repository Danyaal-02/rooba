const express = require("express");
const app = express();

function logRequest(req, res, next) {
    const method = req.method;
    const url = req.originalUrl;
    const accessToken = req.headers["authorization"];
    const timestamp = new Date().toISOString();
  
    console.log(`[${timestamp}] ${method}: ${url}, AccessToken: "${accessToken}"`);
    next();
}

app.use(logRequest);

app.get("/api/users", (req, res) => {
    res.send("This is the users route");
});

app.post("/api/login", (req, res) => {
    res.send("This is the login route");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
