const MongoClient = require('mongodb').MongoClient;
const _ = require('underscore');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function checktrainersignupdb(emailadd, passwordnya, invite) {
try {
    await client.connect()
    const database = client.db('trainer');
    const traintablename = database.collection('trainertable');
    // Query for a movie that has the title 'Back to the Future'
    const queryemail = { email: emailadd };
    const queryinvite = { invitecode: invite };
    const query = { email: emailadd, invitecode: invite };  

    const existemail = await traintablename.findOne(queryemail, {email: 1,  _id: 0});
    if(existemail !== null){
     return "find";
}

    const existinvite = await traintablename.findOne(queryinvite, {invitecode: 1, _id: 0});
   if(existinvite !== null){
      if(existinvite.email){
     return "find"; // return find here means find existing email correlated with invitecode
 }
 else if(existinvite === null){
     return "notfind";
}

} 

    const exists = await traintablename.findOne(query, {email: 1, invitecode:1, _id:0});
   if(exists === null && existinvite !== null){
      return existinvite;
    }       

}
finally {
   await client.close();
}

}


module.exports = {checktrainersignupdb};

