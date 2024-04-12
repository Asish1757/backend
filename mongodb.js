const mongoose = require("mongoose")

//MongoDB Connection Start
mongoose.connect("mongodb+srv://asishabhishek99:momenta123@cluster0.wtoxxtc.mongodb.net/Momenta").then(() => {
    console.log("MongoDB connected")
}).catch((e) => {
    console.log("MongoDB connection error!")
})
//MongoDB Connection End

// Registration Data Schema Start
const infoSchema = {
    Event: {
        type: String,
        required: true
    },
    First_Name: {
        type: String,
        required: true
    },
    Last_Name: {
        type: String,
    },
    Email: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
    },
    City: {
        type: String,
        required: true,
    },
    State: {
        type: String,
        required: true,
    },
    Zip: {
        type: Number,
        required: true
    },
    Guest: {
        type: Number,
        required: true
    }
};
//Schema Model
const Info = new mongoose.model("Info", infoSchema)
// Registration Data Schema End

// Login And Signup Schema Start
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = new mongoose.model("User", LoginSchema)
// Login And Signup Schema End

module.exports = { Info, User }