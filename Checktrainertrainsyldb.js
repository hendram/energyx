const MongoClient = require('mongodb').MongoClient;
const _ = require('underscore');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function checktrainertrainsyldb(trainernamenya, invitecodenya) {
try {
    await client.connect()
    const database = client.db('trainer');
    const traintablename = database.collection('trainertable');
    // Query for a movie that has the title 'Back to the Future'
    const query = { trainername: trainernamenya, invitecode: invitecodenya };  

    const exists = await traintablename.findOne(query, {trainername: 1, invitecode: 1, _id: 0});
   if(exists !== null){
     return exists;
}      

}
finally {
   await client.close();
}

}


module.exports = {checktrainertrainsyldb};

