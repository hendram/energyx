const MongoClient = require('mongodb').MongoClient;
   const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function inserttestsample(sample) {
  
try{
    await client.connect();
       const dbo = client.db("customer");
      const traintablename = {testsample: sample };
      const instraintable = await dbo.collection("customersample").insertOne(traintablename);
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

module.exports = {inserttestsample}
