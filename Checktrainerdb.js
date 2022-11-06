const MongoClient = require('mongodb').MongoClient;
const _ = require('underscore');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function checktrainerdb(invite, trainname) {
try {
    await client.connect()
    const database = client.db('trainer');
    const traintablename = database.collection('trainertable');
    // Query for a movie that has the title 'Back to the Future'
     const queryinvite = { invitecode: invite };    
    const querytrainer = { trainername: trainname };
    const query = { invitecode: invite, trainername: trainname };
  
    const existinvite = await traintablename.findOne(queryinvite, {invitecode: 1,  _id: 0});
    if(existinvite !== null){
     return "find";
}
 
    const existtrainer = await traintablename.findOne(querytrainer, {trainername: 1, _id: 0});
   if(existtrainer !== null){
     return "find";
} 

    const exist = await traintablename.findOne(query, {invitecode: 1, trainername: 1, _id: 0});
    if(exist === null ){
      return "notfind";
    }       
    else if((exist !== null) && (query.invitecode === exist.invitecode) && 
(query.trainername === exist.trainername)) {
            return "find";
}
}
finally {
   await client.close();
}

}


module.exports = {checktrainerdb};

