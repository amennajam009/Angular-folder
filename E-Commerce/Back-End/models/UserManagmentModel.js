
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = parseInt(process.env.SALT_ROUND)

// set data 
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear()
const time = today.getTime()


// USERREGISTERSCHEMMA
const UserResgisterSchemme = mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        saltString: { type: String },
        userPrivilege: { type: String, default: 'User' },
        status: { type: Number, default: 1 },
        CreatedDate: {
            type: String,
            default: `${year}-${month}-${day}-${time}`
        },
    }, { timestamps: true }
)



//sort of middleware

//The pre-save hook is triggered just before the user document is saved to the database.
// It is used to hash the user's password using the bcrypt library,
// which is a popular library for password hashing in Node.js.
UserResgisterSchemme.pre('save', async function (next) {
    try {
        const GenerateSalt = await bcrypt.genSalt(saltRounds)
        const hashedPassword = await bcrypt.hash(this.password, GenerateSalt)
        this.password = hashedPassword
        this.saltString = GenerateSalt
        next()
    } catch (error) {
        return ({
            message: error.message,
            Data: false,
            result: null
        })
    }
})
//sort of middleware
module.exports = mongoose.model('UserRegisterCollection', UserResgisterSchemme)