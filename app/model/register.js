const mongoose = require("mongoose");
const CandidateSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    Nationality: {
        type: String,
        required: true
    },
    FatherName: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    Address: {
        type: String,
        required: true
    },
    Pincode: {
        type: Number,
        required: true
    },
    Country: {
        type: String,
        required: true
    },
    UniversityName: {
        type: String,
        required: true
    },
    CollegeName: {
        type: String,
        required: true
    },
    IntermediateCGPA: {
        type: Number,
        required: true
    },
    SchoolName: {
        type: String,
        required: true
    },
    TenthCGPA: {
        type: Number,
        required: true
    },
    UniversityCGPA: {
        type: String,
        required: true
    },
    Gmail: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    ConfirmPassword: {
        type: String,
        required: true
    }
})
const register = new mongoose.model("register", CandidateSchema);
module.exports = register;