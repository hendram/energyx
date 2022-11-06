const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function updatecustomersignupdb(emailnya, passwordnya, invite, compname) {
try {
    await client.connect()
    const database = client.db('customer');
    const custtabledata = database.collection('customertable');
    // Query for a movie that has the title 'Back to the Future'
    const query = {invitecode: invite, companyname: compname};
    const updated = {$set: { email: emailnya, password: passwordnya, invitecode: invite, companyname: compname }};
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


module.exports = {updatecustomersignupdb};
