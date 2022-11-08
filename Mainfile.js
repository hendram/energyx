const https = require("https");
const http = require("http");
const express = require("express");
const app = express();
const happ = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const Checkcustomerdb = require('./Checkcustomerdb');
const Insertcustomerdb = require('./Insertcustomerdb');
const Checktrainerdb = require('./Checktrainerdb');
const Inserttrainerdb = require('./Inserttrainerdb');
const Checkcustomersignupdb = require('./Checkcustomersignupdb');
const Checkcustomertestidb = require('./Checkcustomertestidb');
const Checktrainersignupdb = require('./Checktrainersignupdb');
const Checkcustomersignindb = require('./Checkcustomersignindb');
const Checktrainersignindb = require('./Checktrainersignindb');
const Checktrainertrainsyldb = require('./Checktrainertrainsyldb');
const Checktrainertrainsyldbsec = require('./Checktrainertrainsyldbsec');
const Checktrainertrainpubdb = require('./Checktrainertrainpubdb');
const Updatecustomersignupdb = require('./Updatecustomersignupdb');
const Updatecustomertestidb = require('./Updatecustomertestidb');
const Inserttrainertrainsyldb = require('./Inserttrainertrainsyldb');
const Updatetrainertrainpubdb = require('./Updatetrainertrainpubdb');
const Updatetrainersignupdb = require('./Updatetrainersignupdb');
const Fetchrandomtestidb = require('./Fetchrandomtestidb');
const Fetchalltrainerdb = require('./Fetchalltrainerdb');


let adminpass = "no";
let newresult = [];


app.use('/', express.static('/home/pi/energyx/build'));

app.use(bodyParser.json());

app.use('/customer', async function(req, res) {

if(req.body.fortestimoni){
    let resultfetch = await Fetchrandomtestidb.fetchrandomtestidb();
   if(resultfetch.length < 5){
          newresult = [...resultfetch];
     console.log(newresult.length);
   }
   else if(resultfetch.length > 5 && resultfetch.length < 10){
      for(let x = 0; x < 5; x++){
         newresult.push(resultfetch[Math.floor(Math.random(resultfetch.length)*10)]);
     }
}
    res.send({answer: newresult});
    
    console.log(newresult);

}

//this is the the first step for customer to be able to sign up 
 if(req.body.invite && req.body.companyname && req.body.tosignup){
  let resultcheckcustone =  await Checkcustomerdb.checkcustomerdb(req.body.invite, req.body.companyname);
  if(resultcheckcustone === "notfind"){
    let resultinscustone = await Insertcustomerdb.insertcustomerdb(req.body.invite, req.body.companyname);
       if(resultinscustone === "1inserted"){
          res.send({invitecode: req.body.invite, companyname: req.body.companyname});
        console.log("1inserted");
}
}
}
//this is the second step for customer, while customer sign up first time
else if(req.body.email && req.body.password && req.body.invitationcode && req.body.fromsignup){
   console.log(req.body.email);
  let resultcheckcusttwo =  await Checkcustomersignupdb.checkcustomersignupdb(req.body.email, 
req.body.password, req.body.invitationcode);
  console.log(resultcheckcusttwo);
  if(resultcheckcusttwo === "find" || resultcheckcusttwo === "notfind"){
      console.log("email or invitecode error");
}
  else if(resultcheckcusttwo.invitecode && resultcheckcusttwo.companyname){
    let resultinscusttwo = await Updatecustomersignupdb.updatecustomersignupdb(req.body.email, 
req.body.password, resultcheckcusttwo.invitecode, resultcheckcusttwo.companyname);
       if(resultinscusttwo === "1updated"){
          res.send({invitecode: resultcheckcusttwo.invitecode, companyname: resultcheckcusttwo.companyname });
        console.log("1updated");
}
}     
}

else if(req.body.email && req.body.password && req.body.fromsignin){
  let resultcheckcusttwo =  await Checkcustomersignindb.checkcustomersignindb(req.body.email, 
req.body.password);
   if(resultcheckcusttwo === "notfind"){
   console.log("notfind");
}
 else if(resultcheckcusttwo.invitecode && resultcheckcusttwo.companyname){
          res.send({invitecode: resultcheckcusttwo.invitecode, companyname: resultcheckcusttwo.companyname });

}     
}

else if(req.body.companyname && req.body.invitecode && req.body.position && req.body.name &&
    req.body.training && req.body.testimoni) {
      console.log(req.body.name);
  let resultcheckcustthree = await Checkcustomertestidb.checkcustomertestidb(req.body.companyname,
req.body.invitecode);
   if(resultcheckcustthree.email && resultcheckcustthree.password){
    let resultinscustthree = await Updatecustomertestidb.updatecustomertestidb(req.body.invitecode, 
req.body.companyname, resultcheckcustthree.email, resultcheckcustthree.password, req.body.name, 
req.body.position, req.body.training, req.body.testimoni);
    if(resultinscustthree === "1updated"){
         res.send({result: "success"}); 
       console.log("1updated");
}         
}
}
});

app.use('/trainer', async function(req, res) {
  console.log(req.body);
if(req.body.alltrainerdata){
  let resultchecktrain =  await Fetchalltrainerdb.fetchalltrainerdb();
  if(resultchecktrain){
     res.send({answer: resultchecktrain});
}
  else {
    console.log("no trainerdata yet");
    }
}

else if(req.body.email === "poppy@energyx.com" && req.body.password === "123456"  && req.body.fromsignin){
         res.send({"answer": "passadmin"});
         adminpass = "yes";
     console.log("inside admin");
}
//this is the the first step for trainer to be able to sign up 
else if(req.body.invite && req.body.trainername && req.body.tosignup){
  let resultchecktrainone =  await Checktrainerdb.checktrainerdb(req.body.invite, req.body.trainername);
  if(resultchecktrainone === "notfind"){
    let resultinstrainone = await Inserttrainerdb.inserttrainerdb(req.body.invite, req.body.trainername);
       if(resultinstrainone === "1inserted"){
          res.send({invitecode: req.body.invite, trainername: req.body.trainername});
        console.log("1inserted");
}
}
}
//this is the second step for trainer, while trainer sign up first time
else if(req.body.email && req.body.password && req.body.invitationcode && req.body.fromsignup){
   console.log(req.body.email);
  let resultchecktraintwo =  await Checktrainersignupdb.checktrainersignupdb(req.body.email, 
req.body.password, req.body.invitationcode);
  console.log(resultchecktraintwo);
if(resultchecktraintwo === "find" || resultchecktraintwo === "notfind"){
      console.log("email or invitecode error");
}

 else  if(resultchecktraintwo.invitecode && resultchecktraintwo.trainername){
    let resultinstraintwo = await Updatetrainersignupdb.updatetrainersignupdb(req.body.email, 
req.body.password, resultchecktraintwo.invitecode, resultchecktraintwo.trainername);
       if(resultinstraintwo === "1updated"){
          res.send({invitecode: resultchecktraintwo.invitecode, trainername: resultchecktraintwo.trainername });
        console.log("1updated");
}
}     
}

else if(req.body.email && req.body.password && req.body.fromsignin){
  let resultchecktraintwo =  await Checktrainersignindb.checktrainersignindb(req.body.email, 
req.body.password);
 if(resultchecktraintwo === "notfind"){
   console.log("notfind");
}
  else if(resultchecktraintwo.invitecode && resultchecktraintwo.trainername){
          res.send({invitecode: resultchecktraintwo.invitecode, trainername: resultchecktraintwo.trainername });

}     
}


else if(req.body.trainername && req.body.invitecode && req.body.classtitle && req.body.trainobj && 
req.body.trainper && req.body.trainsyl && req.body.labsyl) {
      console.log(req.body.trainername);
  let resultchecktrainthree = await Checktrainertrainsyldb.checktrainertrainsyldb(req.body.trainername,
req.body.invitecode);
   if(resultchecktrainthree.trainername && resultchecktrainthree.invitecode){
  let resultchecktrainthree = await Checktrainertrainsyldbsec.checktrainertrainsyldbsec(req.body.trainername,
          req.body.invitecode, req.body.classtitle, req.body.trainobj,  
req.body.trainper, req.body.trainsyl, req.body.labsyl);
    if(resultchecktrainthree === "goahead"){
    let resultinstrainthree = await Inserttrainertrainsyldb.inserttrainertrainsyldb(
req.body.trainername, req.body.invitecode, req.body.classtitle,
req.body.trainobj, req.body.trainper, req.body.trainsyl, req.body.labsyl, "no");
    if(resultinstrainthree === "1inserted"){
         res.send({result: "success"}); 
       console.log("1updated");
}         
}
    else if(resultchecktrainthree === "find"){
     console.log("trainer trying to input exactly same document");
}
} // closing for resultchecktrainthree first variable
} // closing for else if

// this part happen when admin click publish or notpublish button
else if(req.body.trainername && req.body.classtitle && req.body.trainobj && req.body.trainper &&
    req.body.trainsyl && req.body.labsyl && req.body.topublish) {
      console.log(req.body.trainername);
  let resultchecktrainthree = await Checktrainertrainpubdb.checktrainertrainpubdb(req.body.trainername,
req.body.classtitle, req.body.trainobj, req.body.trainper, req.body.trainsyl, req.body.labsyl);
   if(resultchecktrainthree.trainername && resultchecktrainthree.invitecode){
    let resultinstrainthree = await Updatetrainertrainpubdb.updatetrainertrainpubdb(
req.body.trainername, req.body.invitecode, req.body.classtitle, 
req.body.trainobj, req.body.trainper, req.body.trainsyl, req.body.labsyl, req.body.topublish);
    if(resultinstrainthree === "1updated"){
         res.send({result: "success"}); 
       console.log("1updated");
}         
}
}
});

happ.use('*', function(req, res) {
    res.redirect('https://localhost');
});

const options = {
    key: fs.readFileSync("./key.pem", 'utf8'),
    cert: fs.readFileSync("./server.crt", 'utf8'),
};

var server = https.createServer(options, app);
server.listen(443, '', function(req, res) {
           console.log("server started at port 443");
});

const httpServer = http.createServer(happ);
httpServer.listen(80);


