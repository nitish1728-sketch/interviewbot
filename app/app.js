const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./database/conn");
const Register = require("./model/register");
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../app/assets");
console.log(path.join(__dirname, "../app/assets"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));
app.set('views', path.join(__dirname, 'views'));

app.set("view engine", "hbs");
app.get("/", (req, res) => {
    res.render("index")
});
app.get("/login", (req, res) => {
    res.render("login")
});
app.get("/register", (req, res) => {
    res.render("register")
});
app.post("/register", async(req, res) => {
    try {
        const FirstName = req.body.FirstName;
        const LastName = req.body.LastName;
        const gender = req.body.gender;
        const date = req.body.date;
        const Nationality = req.body.Nationality;
        const FatherName = req.body.FatherName;
        const PhoneNumber = req.body.PhoneNumber;
        const Address = req.body.Address;
        const Pincode = req.body.Pincode;
        const Country = req.body.Country;
        const UniversityName = req.body.UniversityName;
        const CollegeName = req.body.CollegeName;
        const IntermediateCGPA = req.body.IntermediateCGPA;
        const SchoolName = req.body.SchoolName;
        const TenthCGPA = req.body.TenthCGPA;
        const UniversityCGPA = req.body.UniversityCGPA;
        const Gmail = req.body.Gmail;
        const Password = req.body.password;
        const CPassword = req.body.confirmpassword;
        if (Password === CPassword) {
            const registerCandidate = new Register({
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                gender: req.body.gender,
                date: req.body.date,
                Nationality: req.body.Nationality,
                FatherName: req.body.FatherName,
                PhoneNumber: req.body.PhoneNumber,
                Address: req.body.Address,
                Pincode: req.body.Pincode,
                Country: req.body.Country,
                UniversityName: req.body.UniversityName,
                CollegeName: req.body.CollegeName,
                IntermediateCGPA: req.body.IntermediateCGPA,
                SchoolName: req.body.SchoolName,
                TenthCGPA: req.body.TenthCGPA,
                UniversityCGPA: req.body.UniversityCGPA,
                Gmail: req.body.Gmail,
                Password: Password,
                ConfirmPassword: CPassword
            })

            const registered = await registerCandidate.save();
            res.status(201).render("index");
        } else {
            res.send(`Dear ${FirstName}.Your password are not matching.`)
        }
    } catch (error) {
        res.status(400).send(error);
    }
})
app.post("/login", async(req, res) => {
    try {
        const Gmail = req.body.Gmail;
        const password = req.body.Password;
        const useremail = await Register.findOne({ Gmail: Gmail });
        if (useremail.Password === password) {
            res.status(201).render("index");
        } else {
            res.send("Password is invalid.Pls enter correct password");
        }
    } catch (error) {
        res.status(400).send("Invalid Gmail")
    }
});
// const bcrypt = require("bcryptjs");
// const securePassword = async(password) => {
//     const passwordHash = await bcrypt.hash(password, 10);
//     console.log(passwordHash);
// }
// securePassword("123");
app.listen(port, () => {
    console.log(`Server running at port no ${port}`);
})
