const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function updatetrainertrainpubconformdb(trainernamenya, invitecodenya, classtitlenya,
trainingobjectivenya, trainingperiodnya, jumlahnya, trainingsyllabusnya, labsyllabusnya, topublishnya, conformnya) {
try {
    await client.connect()
    const database = client.db('trainer');
    const traintabledata = database.collection('trainertabledata');
    // Query for a movie that has the title 'Back to the Future'
    const query = {trainername: trainernamenya, invitecode: invitecodenya, 
classtitle: classtitlenya, trainingobjective: trainingobjectivenya,  
trainingsyllabus: trainingsyllabusnya, labsyllabus: labsyllabusnya };
    const updated = {$set: { trainername: trainernamenya, invitecode: invitecodenya,  
classtitle: classtitlenya, trainingobjective: trainingobjectivenya, 
trainingperiod: trainingperiodnya, jumlah: jumlahnya, 
trainingsyllabus: trainingsyllabusnya, labsyllabus: labsyllabusnya, topublish: topublishnya, conform: conformnya }};
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


module.exports = {updatetrainertrainpubconformdb};
