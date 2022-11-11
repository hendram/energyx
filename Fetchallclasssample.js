const MongoClient = require('mongodb').MongoClient;
const _ = require('underscore');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function fetchallclasssample() {
try {
    await client.connect()
    const database = client.db('customer');
    const custtablename = database.collection('customerclasssample');

    const exists = await custtablename.find().toArray();
   if(exists !== null){
     return exists;
}      

}
finally {
   await client.close();
}

}


module.exports = {fetchallclasssample};

