import React, {useRef, useEffect, useState} from 'react';
import Publishnotpage from './Publishnotpage';
import './Adminpage.css';

const Adminpage = () => {

const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), [])
const alltrainval = useRef({trainername: [], trainobj: [], trainper: [], trainsyl: [], labsyl: [],
topublish: [] });
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
      for(let k=0; k < datanya; k++){
          newpublishornot.push(<Publishnotpage id={k} trainername={alltrainval.current.trainername[k]}
trainobj={alltrainval.current.trainobj[k]} trainper={alltrainval.current.trainper[k]}
trainsyl={alltrainval.current.trainsyl[k]} labsyl={alltrainval.current.labsyl[k]} 
topublish={alltrainval.current.topublish[k]} />);
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
       alltrainval.current = {trainername: [], trainobj: [], trainper: [], trainsyl: [], labsyl: [],
topublish: [] };

          console.log(data);
         for(let x=0; x < data.answer.length; x++){
        alltrainval.current.trainername.push(data.answer[x].trainername);
        alltrainval.current.trainobj.push(data.answer[x].trainobj);
        alltrainval.current.trainper.push(data.answer[x].trainper);
        alltrainval.current.trainsyl.push(data.answer[x].trainsyl);
        alltrainval.current.labsyl.push(data.answer[x].labsyl);
        alltrainval.current.topublish.push(data.answer[x].topublish);
}
   allintrainer(data.answer.length);

});
}



useEffect(() => {
   getalltrainerdata();
},[]);

return(
<div className="Adminpagemain">
<div className="Invitetrainer">
<div className="Generatetokentraindiv">
<button onClick={(e) => handleClicktokentrain(e)} ><span> Generate Token</span></button>
<span>{resultrandomtrain.current}</span>
</div>
<div className="Trainernamediv">
<span>Trainer Name:</span>
<input type="text" size={10} ref={trainname} />
</div>
<div className="Submittrainbuttondiv">
<button onClick={(e) => handleSubmittrainer(e)} >Submit</button>
<span>{successprinttrain.current}</span>
</div>
</div> {/* closing for invitetrainer */}
<div className="Invitecustomer">
<div className="Generatetokencustdiv">
<button onClick={(e) => handleClicktokencust(e)} ><span> Generate Token</span></button>
<span>{resultrandomcust.current}</span>
</div>
<div className="Customercompdiv">
<span>Company Name:</span>
<input type="text" size={10} ref={compname} />
</div>
<div className="Submitcustbuttondiv">
<button onClick={(e) => handleSubmitcustomer(e)} >Submit</button>
<span>{successprintcust.current}</span>
</div>
</div>  {/* closing for InviteCustomer */}
<div>
{publishornot}
</div>
</div>
);
}

export default Adminpage;
