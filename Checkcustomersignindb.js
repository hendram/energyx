const MongoClient = require('mongodb').MongoClient;
const _ = require('underscore');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function checkcustomersignindb(emailadd, passwordnya) {
try {
    await client.connect()
    const database = client.db('customer');
    const custtablename = database.collection('customertable');
    // Query for a movie that has the title 'Back to the Future'
    const query = { email: emailadd, password: passwordnya };  

    const exists = await custtablename.findOne(query, {email: 1, password: 1, _id: 0});
   if(exists !== null){
     return exists;
}      

    else if(exists === null) {
      return "notfind";
}
}
finally {
   await client.close();
}

}


module.exports = {checkcustomersignindb};

