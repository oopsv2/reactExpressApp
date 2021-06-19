const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
app.get("/data", (req, res) => {
  fs.readFile("data.json", "utf-8", (err, data) => {
    const val = JSON.parse(data);
    res.json(val);
  });
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
app.listen(PORT, () => console.log("Listening on Port 5000"));
