const MongoClient = require('mongodb').MongoClient;
const _ = require('underscore');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function fetchallclasssample() {
try {
    await client.connect()
    const database = client.db('trainer');
    const custtablename = database.collection('trainertabledata');

    const exists = await custtablename.find().sort({_id: -1}).limit(5).toArray();
   if(exists !== null){
     return exists;
}      

}
finally {
   await client.close();
}

}


module.exports = {fetchallclasssample};

