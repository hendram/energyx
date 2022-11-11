import React, {useRef, useEffect, useState} from 'react';
import Publishnotpage from './Publishnotpage';
import './Adminpage.css';

const Adminpage = () => {

const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), [])
const alltrainval = useRef({trainername: [], classtitle: [], trainobj: [], trainper: [], trainsyl: [], 
labsyl: [], topublish: [] });
const [publishornot, setPublishornot] = useState([]);

const resultrandomtrain = useRef(null);
const trainname = useRef(null);
const successprinttrain = useRef(null);

const resultrandomcust = useRef(null);
const compname = useRef(null);
const successprintcust = useRef(null);


function forbuttonclick(event){
       event.stopPropagation();
       event.preventDefault();
    }

const handleClicktokentrain = (event) => {
     forbuttonclick(event);     
  resultrandomtrain.current = Math.random().toString(36).slice(2);
        forceUpdate(); 
}

const handleSubmittrainer = async(event) => {
          forbuttonclick(event);

         let randomx = resultrandomtrain.current;
         let nametrainer = trainname.current.value;         

  let trainerdata = {"invite": randomx, "trainername": nametrainer, "tosignup": "yes" }
      console.log(trainerdata);

   await fetch("https://localhost/trainer", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(trainerdata)
}).then((response) =>  response.json()
       ).then(function(data){
          console.log(data)
        if(data.invitecode && data.trainername){
           successprinttrain.current = "Success";
           forceUpdate(); 
}
});
} 

const topublishadmin = async(id, decide) => {
   
  let trainerdata = {"trainername": alltrainval.current.trainername[id],
 "classtitle": alltrainval.current.classtitle[id],
 "trainobj": alltrainval.current.trainobj[id], "trainper": alltrainval.current.trainper[id],
"trainsyl": alltrainval.current.trainsyl[id], "labsyl": alltrainval.current.labsyl[id],
"topublish": decide }

      console.log(trainerdata);

   await fetch("https://localhost/trainer", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(trainerdata)
}).then((response) =>  response.json()
       ).then(function(data){
           if(data.answer === "success" && decide === "no"){
                  alltrainval.current.topublish.splice(id, 1, "no");
                  allintrainer(alltrainval.current.topublish.length);
               }
         else if(data.answer === "success" && decide === "yes"){
                  alltrainval.current.topublish.splice(id, 1, "yes");
                  allintrainer(alltrainval.current.topublish.length);
               }
          console.log(data);

});       
}

const handleClicktokencust = (event) => {
          forbuttonclick(event);

       resultrandomcust.current = Math.random().toString(36).slice(2);
        forceUpdate(); 
}

const handleSubmitcustomer = async(event) => {
        forbuttonclick(event);

         let randomx = resultrandomcust.current;
         let namept = compname.current.value;         

  let customerdata = {"invite": randomx, "companyname": namept, "tosignup": "yes" }
      console.log(customerdata);

   await fetch("https://localhost/customer", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(customerdata)
}).then((response) =>  response.json()
       ).then(function(data){
          console.log(data)
        if(data.invitecode && data.companyname){
           successprintcust.current = "Success";
           forceUpdate(); 
}
});
}

const allintrainer = (datanya) => {
        let newpublishornot = [];
        console.log("inside allintrainer");
      for(let k=0; k < datanya; k++){
          newpublishornot.push(<Publishnotpage id={k} trainername={alltrainval.current.trainername[k]}
classtitle={alltrainval.current.classtitle[k]} trainobj={alltrainval.current.trainobj[k]} 
trainper={alltrainval.current.trainper[k]}
trainsyl={alltrainval.current.trainsyl[k]} labsyl={alltrainval.current.labsyl[k]} 
topublish={alltrainval.current.topublish[k]} topublishfrom={topublishadmin} />);
}

setPublishornot(newpublishornot);
}


const getalltrainerdata = async() => {
  let trainerdataall = {"alltrainerdata": "yes"}
      console.log(trainerdataall);

   await fetch("https://localhost/trainer", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(trainerdataall)
}).then((response) =>  response.json()
       ).then(function(data){
       alltrainval.current = {trainername: [], classtitle: [], trainobj: [], trainper: [], trainsyl: [], 
labsyl: [],
topublish: [] };

          console.log(data);
         for(let x=0; x < data.answer.length; x++){
        alltrainval.current.trainername.push(data.answer[x].trainername);
        alltrainval.current.classtitle.push(data.answer[x].classtitle);
        alltrainval.current.trainobj.push(data.answer[x].trainingobjective);
        alltrainval.current.trainper.push(data.answer[x].trainingperiod);
        alltrainval.current.trainsyl.push(data.answer[x].trainingsyllabus);
        alltrainval.current.labsyl.push(data.answer[x].labsyllabus);
        alltrainval.current.topublish.push(data.answer[x].topublish);
}
   allintrainer(data.answer.length);
     console.log(alltrainval.current.trainsyl[1]);
});
}



useEffect(() => {
   getalltrainerdata();
},[]);

return(
<div className="Adminpagemain">
<div className="Invitetrainer">
<div className="Generatetokentraindiv">
<button onClick={(e) => handleClicktokentrain(e)} className="Generatetoktrainbut">Generate Token</button>
<span>{resultrandomtrain.current}</span>
</div>
<div className="Trainernameadmdiv">
<div className="Trainernameadmtext">Trainer Name:</div>
<div className="Trainernameadminputdiv">
<input type="text" ref={trainname} className="Trainernameinput" />
</div>
</div>
<div className="Submittrainbuttondiv">
<button onClick={(e) => handleSubmittrainer(e)} className="Submittrainbut">Submit</button>
<span>{successprinttrain.current}</span>
</div>
</div> {/* closing for invitetrainer */}
<div className="Invitecustomer">
<div className="Generatetokencustdiv">
<button onClick={(e) => handleClicktokencust(e)} className="Generatetokcustbut"> Generate Token</button>
<span>{resultrandomcust.current}</span>
</div>
<div className="Customercompdiv">
<div className="Customercomptext">Company Name:</div>
<div className="Companynameinputdiv">
<input type="text" ref={compname} className="Companynameinput"/>
</div>
</div>
<div className="Submitcustbuttondiv">
<button onClick={(e) => handleSubmitcustomer(e)} className="Submitcustbut">Submit</button>
<span>{successprintcust.current}</span>
</div>
</div>  {/* closing for InviteCustomer */}
<div className="Publishdiv">
<div className="Publishpartdiv">
<div className="Publishtitletextdiv">
Trainer Listing Publish
</div>
</div> {/* closing for publishpartdiv */}
<div className="Publishornotencapdiv" >
{publishornot}
</div>
</div>  {/* closing for publishdiv */}
</div>
);
}

export default Adminpage;
