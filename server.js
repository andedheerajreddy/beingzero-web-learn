const express = require('express');

const app = express();


app.use(express.static("frontend"));
app.get("/", function(req, res) {
    res.send("Welcome to My Basic Site");
})
app.get("/resume", (req, res) => {
    res.sendFile(__dirname + "/frontend/html/resume.html");
})
app.get("/google", (req, res) => {
        res.sendFile(__dirname + "/frontend/html/google.html");
    })
    // Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function() {
    console.log("Server Starting running on http://localhost:" + PORT);
})