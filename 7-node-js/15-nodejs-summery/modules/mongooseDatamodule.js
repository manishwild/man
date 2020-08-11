const passwordHash = require('password-hash')
// const {MongoClient, ObjectID} = require('mongodb')
const mongoose = require('mongoose')
const fs = require('fs')
const connectionString = 'mongodb+srv://man:12345abc@cluster0.wtcsm.mongodb.net/manish?retryWrites=true&w=majority'
const {Schema} = mongoose
const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    }, 
    password:{
        type: String,
        required: true
    }
    
})

const Users = mongoose.model('users',userSchema)

function connect() {
    return new Promise ((resolve, reject) =>{
     if (mongoose.connection.readyState === 1) {
        resolve()
    } else {
        mongoose.connect(connectionString , {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true
        }).then(() =>{
            resolve()
        }).catch(error =>{
            reject(error)
        })
    }
    })
   
}
function registerUser(name,email,password) {
    return new Promise((resolve,reject) =>{
        connect().then(() => {
            //create new user
            const newUser = new Users ({
            name: name,
            email:email,
            password: passwordHash.generate(password)
        })
        //save the new user in the database
        newUser.save().then(result => {
            console.log(result);     
            resolve()
        }).catch(error => {
            console.log(error.code);
            if (error.code === 11000) {
                reject('exist')
            } else {
                 reject(error)
            }    
           
        })

   
        }).catch(error =>{
            reject(error)
        })
    })  
    
}

module.exports = {
    registerUser
    
 }