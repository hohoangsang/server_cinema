// module.exports = {
//     mongoURI: 'mongodb+srv://sanghoang:Duelingnetword1@cluster0.aaxgi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// }

const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
require('dotenv').config()
const URI = 'mongodb+srv://sanghoang:Duelingnetword1@cluster0.aaxgi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

async function connect(){

    try {
        await mongoose.connect(URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
           
        });
    // await client.connect();
        console.log('MongoDB Connected...')
        
    } catch (error) {
        console.log('that bai')
    }

}

module.exports={connect};