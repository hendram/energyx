const MongoClient = require('mongodb').MongoClient;
const _ = require('underscore');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function checktrainertrainpubconformdb(trainernamenya, classtitlenya, trainobjnya, 
trainsylnya, labsylnya) {
try {
    await client.connect()
    const database = client.db('trainer');
    const traintablename = database.collection('trainertabledata');
    // Query for a movie that has the title 'Back to the Future'
    const query = { trainername: trainernamenya, classtitle: classtitlenya, trainingobjective: trainobjnya, 
trainingsyllabus: trainsylnya, labsyllabus: labsylnya };  

    const exists = await traintablename.findOne(query, {trainername: 1, classtitle: 1, trainingobjective: 1, 
trainingsyllabus: 1, labsyllabus: 1, _id: 0});
   if(exists !== null){
     return exists;
}      

}
finally {
   await client.close();
}

}


module.exports = {checktrainertrainpubconformdb};

