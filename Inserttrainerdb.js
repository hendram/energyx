const MongoClient = require('mongodb').MongoClient;
   const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function inserttrainerdb(invite, trainname) {
  
try{
    await client.connect();
       const dbo = client.db("trainer");
      const traintablename = {invitecode: invite, trainername: trainname, email:"", password:"" };
      const instraintable = await dbo.collection("trainertable").insertOne(traintablename);
                if(instraintable === null) {
              return "failed";
             }
           else if(instraintable) {
             return "1inserted";
            }
}
finally{
   await client.close();
}

}

module.exports = {inserttrainerdb}