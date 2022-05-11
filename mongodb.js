const {MongoClient}= require('mongodb');
const url = 'mongodb://localhost:27017';
const database = "resturant"
const client = new MongoClient(url);

async function dbConnection()
{
    let result = await client.connect()
    let db = result.db(database);
    return db.collection("menu");
}

module.exports=dbConnection;