const MongoClient = require('mongodb').MongoClient;
const _ = require('underscore');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function checkcustomerdb(invite, compname) {
try {
    await client.connect()
    const database = client.db('customer');
    const custtablename = database.collection('customertable');
    // Query for a movie that has the title 'Back to the Future'
    const queryinvite = { invitecode: invite };
    const querycompany = { companyname: compname };
    const query = { invitecode: invite, companyname: compname };
  
    const existinvite = await custtablename.findOne(queryinvite, {invitecode: 1,  _id: 0});
    if(existinvite !== null){
     return "find";
}

    const existcompany = await custtablename.findOne(querycompany, {companyname: 1, _id: 0});
   if(existcompany !== null){
     return "find";
} 
     const exist = await custtablename.findOne(query, {invitecode: 1, companyname: 1, _id: 0});
    if(exist === null ){
      return "notfind";
    }       
    else if((exist !== null) && (query.invitecode === exist.invitecode) && 
(query.companyname === exist.companyname)) {
            return "find";
}
}
finally {
   await client.close();
}

}


module.exports = {checkcustomerdb};

