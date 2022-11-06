const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function updatecustomertestidb(invitecodenya, companynamenya, emailnya, passwordnya, 
namenya, positionnya, trainingnya, testimoninya) {
try {
    await client.connect()
    const database = client.db('customer');
    const custtabledata = database.collection('customertable');
    // Query for a movie that has the title 'Back to the Future'
    const query = {invitecode: invitecodenya, companyname: companynamenya};
    const updated = {$set: { invitecode: invitecodenya, companyname: companynamenya, email: emailnya, 
password: passwordnya, name: namenya, position: positionnya, training: trainingnya, testimoni: testimoninya }};
    const exist = await custtabledata.updateOne(query, updated);
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


module.exports = {updatecustomertestidb};
