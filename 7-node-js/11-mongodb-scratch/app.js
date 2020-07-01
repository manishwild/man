const express = require('express');
const { MongoClient } = require('mongodb');
const { response } = require('express');

const app = express()
const connectionString = 'mongodb+srv://fbw5:123456abc@cluster0.wtcsm.mongodb.net/test1?retryWrites=true&w=majority'

app.get('/', (req, res) => {
    res.send('Welcome to mongoDb')
});


app.get('/connect', (req, res)=>{
    MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true}).then(client =>{
      
        console.log(client)
        res.send('connected');
    }).catch(error=>{
        console.log(error);
        res.send('could not connect')
    })
})

app.get('/adduser', (req, res) => {
    //connect node js to mongodb server or cluster
    MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true}).then(client =>{
        //get the database
        const db = client.db('test1')
        //insert data to a collection
        db.collection('users').insertOne({
            email:'manishwild1000@google.com',
            password:'123456'
        }).then(response =>{
            console.log(response);
            res.send(response);
        }).catch(error =>{
            console.log(error);
            res.send(error)
            client.close()
        })
        client
    }).catch(error=>{
       
        res.send('can not connect')
    })
    
});

app.get('/addusersync', (req, res) => {
    //iife (async ()=>{ your code})() we should try catch we can find error
    (async()=>{
        try {
           const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true})
        const db = client.db('test1')
        const response = await db.collection('users').insertOne({
            email:'man@man.com',
            password:'123456'
        })
        client.close() 
        res.send(response);
        } catch (error) {
            res.send(error);
        }
        
        
    })()
});

app.get('/insertmany', (req, res) => {
    (async()=>{
        try {
           const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true})
        const db = client.db('test1')
        const response = await db.collection('users').insertMany([
            {
            email:'man@m1an.com',
            password:'123456'
        },{
            email:'man@ma1n.com',
            password:'123456'
        },{
            email:'man@ma1n.com',
            password:'123456'
        },{
            email:'man@ma1n.com',
            password:'123456'
        }
    ])
        client.close() 
        res.send(response);
        } catch (error) {
            res.send(error);
        }
        
        
    })()
    
});


app.get('/getuser', (req, res) => {
    (async()=>{
        try {
           const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true})
        const db = client.db('test1')
        const response = await db.collection('users').find().toArray()
        console.log(response)
        client.close() 
        res.send(response);
        } catch (error) {
            res.send(error);
        }
        
        
    })()
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});