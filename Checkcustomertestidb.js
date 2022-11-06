const MongoClient = require('mongodb').MongoClient;
const _ = require('underscore');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function checkcustomertestidb(companynamenya, invitecodenya) {
try {
    await client.connect()
    const database = client.db('customer');
    const custtablename = database.collection('customertable');
    // Query for a movie that has the title 'Back to the Future'
    const query = { companyname: companynamenya, invitecode: invitecodenya };  

    const exists = await custtablename.findOne(query, {companyname: 1, invitecode: 1, _id: 0});
   if(exists !== null){
     return exists;
}      

}
finally {
   await client.close();
}

}


module.exports = {checkcustomertestidb};

