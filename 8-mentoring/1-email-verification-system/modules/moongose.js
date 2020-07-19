const passwordHash = require('password-hash')

const mongoose = require('mongoose')
const fs = require('fs')
const connectionString = 'mongodb+srv://mani:12345@cluster0.wtcsm.mongodb.net/form?retryWrites=true&w=majority'

// get Schema object
const Schema = mongoose.Schema
// creat new users schema
const usersSchema = new Schema({
    fName:{
        type:String,
        required:true,
        max:50,
        min:2

    },
    lName:{
        type:String,
        required:true,
        max:50,
        min:2

    },
    password: {
        type: String,
        required: true,
        max:100,
        min:2
    },
    email:{
        type: String,
        unique: true,
        required: true,
        max:100,
        min:2
    },
    verified:{
        type:Boolean,
        required:true
    }
})

// creat Users model
const Users = mongoose.model('users', usersSchema)
function connect() {
    return new Promise((resolve, reject) => {
        if (mongoose.connection.readyState === 1) {
            resolve()
        } else {
            mongoose.connect(connectionString, {
                useUnifiedTopology: true,
                useCreateIndex: true,
                useNewUrlParser: true
            }).then(() => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        }
    })
  }

  function registerUser (fName, lName, password, email) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            // creat new user
            const newUser = new Users({
                fName:fName,
                lName:lName,
                password: passwordHash.generate(password),
                email: email,              
                verified: false
            })
            // save the newUser in the database
            newUser.save().then(result => {
                console.log(result);
                resolve()
            }).catch(error => {
                console.log(error.code);
                if (error.code === 11000) {
                    reject ('exist')
                } else {
                  reject(error)
                }
            })
        }).catch(error => {
            reject(error)
        })
    })
}

module.exports = {
    registerUser
  }