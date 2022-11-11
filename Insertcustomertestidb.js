const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function insertcustomertestidb(invitecodenya, companynamenya,  
namenya, positionnya, trainingnya, testimoninya, suggestionnya) {
try {
    await client.connect()
    const database = client.db('customer');
    const custtabledata = database.collection('customertabledata');
    // Query for a movie that has the title 'Back to the Future'
    const inserted = {invitecode: invitecodenya, companyname: companynamenya, 
name: namenya, position: positionnya, training: trainingnya, testimoni: testimoninya, suggestion: suggestionnya };
    const exist = await custtabledata.insertOne(inserted);
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


module.exports = {insertcustomertestidb};
