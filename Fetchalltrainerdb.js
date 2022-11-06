const MongoClient = require('mongodb').MongoClient;
const _ = require('underscore');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function fetchalltrainerdb() {
try {
    await client.connect()
    const database = client.db('trainer');
    const traintablename = database.collection('trainertable');

    const exists = await traintablename.find().project({trainername: 1, trainingobjective: 1, 
trainingperiod: 1, trainingsyllabus: 1, labsyllabus: 1, topublish: 1}).toArray();
   if(exists !== null){
     return exists;
}      

}
finally {
   await client.close();
}

}


module.exports = {fetchalltrainerdb};

