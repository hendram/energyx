const MongoClient = require('mongodb').MongoClient;
const _ = require('underscore');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function fetchalltrainerpublishdblisted() {
try {
    await client.connect()
    const database = client.db('trainer');
    const traintablename = database.collection('trainertabledata');

    const exists = await traintablename.find({topublish: "yes"}).project({trainername: 1, classtitle: 1, trainingobjective: 1, 
trainingperiod: 1, jumlah: 1, trainingsyllabus: 1, labsyllabus: 1, conform: 1}).toArray();
   if(exists !== null){
     return exists;
}      

}
finally {
   await client.close();
}

}


module.exports = {fetchalltrainerpublishdblisted};

