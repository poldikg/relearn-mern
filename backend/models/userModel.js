const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

})

// this keyword = User model
userSchema.statics.signup = async function (email, password) {

    if (!email || !password) {
        throw Error("All fields must be filled.")
    }

    if (!validator.isEmail(email)) {
        throw Error("Email is not valid.")
    }

    if (!validator.isStrongPassword(password)) {
        throw Error("Password is not strong enough, try using special characters.")
    }

    const exists = await this.findOne({ email })
    if (exists) {
        throw Error("This email already exists.")
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })

    return user;

}

//static login method
userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error("All fields must be filled.")
    }

    const user = await this.findOne({ email })
    if (!user) {
        throw Error("Incorrect email")
    }

    //comparing the written password from the user to the hashed one in the DB
    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error("Incorrect password")
    }
    return user
}

module.exports = mongoose.model("user", userSchema)