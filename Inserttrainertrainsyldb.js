const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function inserttrainertrainsyldb(trainernamenya, invitecodenya, classtitlenya,
trainingobjectivenya, trainingperiodnya, trainingsyllabusnya, labsyllabusnya, topublishnya) {
try {
    await client.connect()
    const database = client.db('trainer');
    const traintabledata = database.collection('trainertabledata');
    // Query for a movie that has the title 'Back to the Future'
    const inserted = {trainername: trainernamenya,   invitecode: invitecodenya, 
 classtitle: classtitlenya, trainingobjective: trainingobjectivenya, 
trainingperiod: trainingperiodnya, jumlah: 0, trainingsyllabus: trainingsyllabusnya, 
labsyllabus: labsyllabusnya, topublish: topublishnya, conform: "no" };
    const exist = await traintabledata.insertOne(inserted);
    if(exist  === null ){
      return "failedinsert";
    }       
    else if(exist !== null) {
            return "1inserted";
}
}
finally{
await client.close();
}

}


module.exports = {inserttrainertrainsyldb};
