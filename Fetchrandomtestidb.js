const MongoClient = require('mongodb').MongoClient;
const _ = require('underscore');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function fetchrandomtestidb() {
try {
    await client.connect()
    const database = client.db('customer');
    const custtablename = database.collection('customertabledata');
    // Query for a movie that has the title 'Back to the Future'

    const exists = await custtablename.aggregate([{$sample: { size: 99}}]).project({training: 1, testimoni: 1, 
name: 1, position: 1, companyname: 1}).toArray();
   if(exists !== null){
     return exists;
}      

}
finally {
   await client.close();
}

}


module.exports = {fetchrandomtestidb};

