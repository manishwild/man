const passwordHash = require('password-hash')
const {MongoClient, ObjectID} = require('mongodb')
const fs = require('fs')
const connectionString = 'mongodb+srv://mani:12345@cluster0.wtcsm.mongodb.net/form?retryWrites=true&w=majority'


function connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true }).then(client => {
            resolve(client)
        }).catch(error => {
            reject(error)
        })
    })
  }

  
  function registerUser (fName,lName,email, password) {
    return new Promise((resolve, reject) => {
        connect().then(client => {
            const db = client.db('form')
            db.collection('users').findOne({email: email}).then(user => {
                if (user) {
                    client.close()
                    reject('exist')
                } else {
                    db.collection('users').insertOne({
                        fName: fName,
                        lName:lName,
                        email: email,
                        password: passwordHash.generate(password)
                    }).then(response => {
                        client.close()
                        if (response.result.ok){
                            resolve()
                        } else {
                            reject('can not insert')
                        }
                    }).catch(error => {
                        client.close()
                        reject(error)
                    })
                }
            }).catch(error => {
              client.close()
              reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })
}


module.exports = {registerUser}