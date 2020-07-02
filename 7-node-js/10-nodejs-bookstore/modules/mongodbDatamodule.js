const passwordHash = require('password-hash')
const { MongoClient, ObjectID } = require('mongodb')
const connectionString = 'mongodb+srv://fbw5:123456abc@cluster0.wtcsm.mongodb.net/test1?retryWrites=true&w=majority'

function connect() {
    return new Promise((resolve,reject) =>{
        MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true}).then(client =>{
          resolve(client)
        }).catch(error =>{
            reject(error)
        })
    })
}

function registerUser(email,password) {
    return new Promise((resolve,reject) =>{
        connect().then(client => {
            const db = client.db('test1')
            db.collection('users').findOne({email:email}).then(user =>{
                if (user) {
                    client.close()
                    reject('exist')
                } else {
                    db.collection('users').insertOne({
                        email:email,
                        password:passwordHash.generate(password)
                    }).then(response =>{
                        client.close()
                        if (response.result.ok) {
                            resolve()
                        } else {
                            reject('can not insert')
                        }
                        
                    }).catch(error =>{
                        client.close()
                        reject(error)
                    })

                }
            }).catch(error =>{ 
                client.close()
               reject(error)
            })
        }).catch(error =>{
            reject(error)
        })
    })
}

function checkUser(email,password) {
    return new Promise((resolve,reject) =>{
        connect().then(client => {
            const db = client.db('test1')
            db.collection('users').findOne({email:email}).then(user => {
                if (user) {
                    if (passwordHash.verify(password,user.password)) {
                        resolve(user)
                    }else{
                        reject(3)
                    }
                } else {
                    reject(3)
                }
            }).catch(error =>{
                client.close()
                reject(3)
            })
        }).catch(error =>{
            reject(error)
        })
    })
}


module.exports = {
    registerUser,
    checkUser }