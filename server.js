const shortid = require("shortid");
const express = require('express');
const app = express();
app.use(express.static("frontend"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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


app.get("/todoapi", (req, res) => {
    res.sendFile(__dirname + "/frontend/html/todoapi.html");
})



app.get("/charts", (req, res) => {
    res.sendFile(__dirname + "/frontend/html/chart.html");
})

app.get("/signin", (req, res) => {
    res.sendFile(__dirname + "/frontend/html/signin.html");
})


let todo = [];
app.get("/api/todos", (req, res) => {
    res.status(200).json({
        todo: todo
    });
})
app.get("/api/todos/:todoid", (req, res) => {
    let id = req.params.todoid;
    let singletodo = todo.filter(data => (data.id == id))[0];
    res.status(200).json({
        singleitem: todo
    })

})
app.post("/api/todos", (req, res) => {
    let data = req.body;
    let id = shortid.generate();
    data.id = id;
    todo.push(data);
    res.status(200).json({
        status: "added",
        data: data
    })
})
app.put("/api/todos/:todoid", (req, res) => {
    let id = req.params.todoid;
    let data = req.body
    let idx = todo.findIndex((obj => obj.id == id));
    console.log(req.body)
    if (data.t == "toggle")
        todo[idx].isActive = !todo[idx].isActive;
    else
        todo[idx].title = data.title;
    console.log(todo[idx]);

    res.status(200).json({
        status: "updated",
        data: todo[idx]
    })
})
app.delete("/api/todos/:todoid", (req, res) => {
    let id = req.params.todoid;
    let idx = todo.findIndex((obj => obj.id == id));
    let itemdata = todo[idx];
    todo.splice(idx, 1);
    res.status(200).json({
        status: "deleted",
        data: itemdata
    })
})
















// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function() {
    console.log("Server Starting running on http://localhost:" + PORT);
})