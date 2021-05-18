const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    articles: { type: Number, required: true },
    isDeleted: { type: Boolean, default: false }
})

module.exports = mongoose.model("courses", courseSchema);