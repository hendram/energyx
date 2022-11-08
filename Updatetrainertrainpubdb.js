const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function updatetrainertrainpubdb(trainernamenya, invitecodenya, classtitlenya,
trainingobjectivenya, trainingperiodnya, trainingsyllabusnya, labsyllabusnya, topublishnya) {
try {
    await client.connect()
    const database = client.db('trainer');
    const traintabledata = database.collection('trainertabledata');
    // Query for a movie that has the title 'Back to the Future'
    const query = {trainername: trainernamenya, invitecode: invitecodenya, 
classtitle: classtitlenya, trainingobjective: trainingobjectivenya, 
trainingperiod: trainingperiodnya,
trainingsyllabus: trainingsyllabusnya, labsyllabus: labsyllabusnya};
    const updated = {$set: { trainername: trainernamenya, invitecode: invitecodenya,  
classtitle: classtitlenya, trainingobjective: trainingobjectivenya, 
trainingperiod: trainingperiodnya, 
trainingsyllabus: trainingsyllabusnya, labsyllabus: labsyllabusnya, topublish: topublishnya }};
    const exist = await traintabledata.updateOne(query, updated);
    if(exist  === null ){
      return "failedupdate";
    }       
    else if(exist !== null) {
            return "1updated";
}
}
finally{
await client.close();
}

}


module.exports = {updatetrainertrainpubdb};
