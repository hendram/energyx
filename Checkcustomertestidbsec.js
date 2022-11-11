const MongoClient = require('mongodb').MongoClient;
const _ = require('underscore');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function checkcustomertestidbsec(invitecodenya, companynamenya,  
namenya, positionnya, trainingnya, testimoninya, suggestionnya) {
try {
    await client.connect()
    const database = client.db('customer');
    const custtablename = database.collection('customertabledata');
    // Query for a movie that has the title 'Back to the Future'
    const query = {invitecode: invitecodenya, companyname: companynamenya, 
name: namenya, position: positionnya, training: trainingnya, testimoni: testimoninya, 
suggestion: suggestionnya }  

    const exists = await custtablename.findOne(query, {companyname: 1, invitecode: 1, name: 1,
position: 1, training: 1, testimoni: 1, suggestion: 1, _id: 0});
   if(exists !== null){
     return "find";
}      
  else if(exists === null){
    return "goahead";
}

}
finally {
   await client.close();
}

}


module.exports = {checkcustomertestidbsec};

