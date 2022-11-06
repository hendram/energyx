const MongoClient = require('mongodb').MongoClient;
 const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function insertcustomerdb(invite, compname) {
  
try{
    await client.connect();
       const dbo = client.db("customer");
      const custtablename = {invitecode: invite, companyname: compname, email: "", password: "", name: "",
  position: "", training: "", testimoni: ""};
      const inscusttable = await dbo.collection("customertable").insertOne(custtablename);
                if(inscusttable === null) {
             return "failed to insert cust";
             }
           else if(inscusttable) {
             return "1inserted";
            }
}
finally{
   await client.close();
}

}

module.exports = {insertcustomerdb}
