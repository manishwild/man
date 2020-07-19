const express = require('express')
//require mongoose
const mongoose = require('mongoose')
const { stringify } = require('querystring')
const connectionString = 'mongodb+srv://bla_user:zaCkzIrpnsxHTShb@cluster0.wtcsm.mongodb.net/mongoose?retryWrites=true&w=majority'
const app = express()

//get schema object from mongoose
//const Schema = mongoose.Schema
const {Schema} = mongoose

//create user schema
const userSchema = new Schema({
    fname:{
        type: String,
        required: true
    }, 
    lname:{
        type: String,
        required: true
    }, 
    email:{
        type: String,
        required: true,
        unique: true
    }, 
    age:{
        type: Number,
        required: true
    }, 
    active:{
        type: Boolean,
        required: true
    }
})

const Users = mongoose.model('users',userSchema)

app.get('/', (req, res) => {
    res.send('Welcome to Mongoose')
});
app.get('/connect', (req, res) => {
    //check if mongose is already connected to database
    if (mongoose.connection.readyState === 1) {
        res.send('Already connected');
    } else {
        mongoose.connect(connectionString , {
            useCreateIndex: true,
            useNewUrlParser: true
        }).then(() =>{
            res.send('It is connected Now')
        }).catch(error =>{
            res.send(error);
        })
    }
    
});
//dont create multi database user



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

app.get('/adduser', (req, res) => {
    connect().then(() => {
        //create new user
        const newUser = new Users ({
            fname: 'Manish',
            lname: 'shahi',
            email: 'manishwild@manish.com',
            age: 34,
            active: true
        })
        newUser.save().then(result => {
            res.json(result)
        }).catch(error => {
            res.send(error.message)
        })

    }).catch(error => {
        res.send(error.message)
    })
});


app.get('/updateuser', (req, res) => {
    connect().then(() => {
        Users.updateOne({_id: '5f0c4a81fcd75c2938f45f06'},{
            age: 35,
            //increase the version number in the database with one
            //to show how many time this document have updated
            $inc: { __v: 1 }
        }).then(result =>{
            res.json(result)
        }).catch(error => {
            res.send(error.message)
        })
    }).catch(error => {
        res.send(error.message);

    })
});

app.get('/updateusers', (req, res) => {
    connect().then(() => {
        Users.updateMany({lname: 'shahi'},{
            fname: 'Manish',
            $inc: { __v: 1 }
        }).then(result =>{
            res.json(result)
        }).catch(error => {
            res.send(error.message)
        })
    }).catch(error => {
        res.send(error.message);

    })
});
app.get('/getuser', (req, res) => {
    connect().then(() =>{
        Users.findOne({email: 'manishwild@manish1.com'}).then(result =>{
            res.json(result)
        }).catch(error => {
            res.send(error.message)
        })
     
    
    }).catch(error => {
            res.send(error.message)
        })
});

app.get('/getusers', (req, res) => {
    connect().then(() =>{
        Users.find().then(result =>{
            //return a array
            res.json(result)
        }).catch(error => {
            res.send(error.message)
        })
     
    
    }).catch(error => {
            res.send(error.message)
        })
});
app.get('/deleteuser', (req, res) => {
    connect().then(() =>{
        Users.deleteOne({email: 'manishwild@manish1.com'}).then(result =>{
            res.json(result)
        }).catch(error => {
            res.send(error.message)
        })
     
    
    }).catch(error => {
            res.send(error.message)
        })
});

app.get('/deleteusers', (req, res) => {
    connect().then(() =>{
        Users.deleteMany().then(result =>{
            res.json(result)
        }).catch(error => {
            res.send(error.message)
        })
     
    
    }).catch(error => {
            res.send(error.message)
        })
});
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});