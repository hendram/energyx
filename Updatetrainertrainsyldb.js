const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function updatetrainertrainsyldb(invitecodenya, trainernamenya, emailnya, passwordnya, 
trainingobjectivenya, trainingperiodnya, trainingsyllabusnya, labsyllabusnya, topublishnya) {
try {
    await client.connect()
    const database = client.db('trainer');
    const traintabledata = database.collection('trainertable');
    // Query for a movie that has the title 'Back to the Future'
    const query = {invitecode: invitecodenya, trainername: trainernamenya};
    const updated = {$set: { invitecode: invitecodenya, trainername: trainernamenya, email: emailnya, 
password: passwordnya, trainingobjective: trainingobjectivenya, trainingperiod: trainingperiodnya, 
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


module.exports = {updatetrainertrainsyldb};
