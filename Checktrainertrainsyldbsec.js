const MongoClient = require('mongodb').MongoClient;
const _ = require('underscore');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function checktrainertrainsyldbsec(trainernamenya, invitecodenya, classtitlenya,
trainingobjectivenya, trainingperiodnya, trainingsyllabusnya, labsyllabusnya) {
try {
    await client.connect()
    const database = client.db('trainer');
    const traintablename = database.collection('trainertabledata');
    // Query for a movie that has the title 'Back to the Future'
    const query = { trainername: trainernamenya, invitecode: invitecodenya, classtitle: classtitlenya, 
trainingobjective: trainingobjectivenya, 
trainingperiod: trainingperiodnya, trainingsyllabus: trainingsyllabusnya, 
labsyllabus: labsyllabusnya };  

    const exists = await traintablename.findOne(query, {trainername: 1, invitecode: 1, classtitle: 1,
trainingobjective: 1, trainingperiod: 1, trainingsyllabus: 1, labsyllabus: 1, _id: 0});
   if(exists !== null){
     return "find";
}      
  else if(exists === null){
    return "goahead";
}

}
finally {
   await client.close();
}

}


module.exports = {checktrainertrainsyldbsec};

