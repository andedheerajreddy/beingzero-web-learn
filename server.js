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
app.get("/apple", (req, res) => {
    res.sendFile(__dirname + "/frontend/html/apple.html");
})
app.get("/rgb", (req, res) => {
    res.sendFile(__dirname + "/frontend/html/rgb.html");
})

app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/frontend/html/signup.html");
})

app.get("/todo", (req, res) => {
    res.sendFile(__dirname + "/frontend/html/todo.html");
})


app.get("/charts", (req, res) => {
    res.sendFile(__dirname + "/frontend/html/chart.html");
})

app.get("/signin", (req, res) => {
        res.sendFile(__dirname + "/frontend/html/signin.html");
    })
    // Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function() {
    console.log("Server Starting running on http://localhost:" + PORT);
})