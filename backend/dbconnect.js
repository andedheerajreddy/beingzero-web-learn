const mongoose = require("mongoose")

module.exports.connect = () => {
    mongoose
        .connect(process.env.connection_string, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("Database Connected"))
        .catch((err) => console.log(err));
}