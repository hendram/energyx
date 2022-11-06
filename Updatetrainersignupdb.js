const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function updatetrainersignupdb(emailnya, passwordnya, invite, trainname) {
try {
    await client.connect()
    const database = client.db('trainer');
    const traintabledata = database.collection('trainertable');
    // Query for a movie that has the title 'Back to the Future'
    const query = {invitecode: invite, trainername: trainname};
    const updated = {$set: { email: emailnya, password: passwordnya, invitecode: invite, trainername: trainname }};
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


module.exports = {updatetrainersignupdb};
