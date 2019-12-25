const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("Node js app with Docker");
});

app.listen(3000, () => {
	console.log("Node js app is running on port 3000");
});
