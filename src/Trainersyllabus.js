import React, { useState, useRef } from 'react';
import './Trainersyllabus.css';
import Emitter from './Emitter';

const Trainersyllabus = (props) => {

const inputtype = useRef({nameinput: "Nameinputgrey", positioninput: "Positioninputgrey", 
traininginput: "Traininginputgrey"});
// const [trainerper, setTrainerper] = useState("Please input your training class length, how many days, etc");
// const  trainpercol = useRef(color: "trainper"}); 

const trainername = useRef(null);
const invitecode = useRef(null);
const trainobj = useRef(null);
const trainper = useRef(null);
const trainsyl = useRef(null);
const labsyl = useRef(null);

const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), [])


const updatetrainname = (accept) => {
     trainername.current = accept.trainername;
     invitecode.current = accept.invitecode;
     console.log(accept);
     forceUpdate();
}

const numberTrainer = Emitter.listenerCount('datafortrainer', updatetrainname);
if(numberTrainer < 1){
    Emitter.on('datafortrainer', updatetrainname);
}

/*
const handleFocustrainper = (event) => {
      event.stopPropagation();
      event.preventDefault();

     setTrainper("");

}
*/

const handleResettrainsyl = (event) => {
   event.stopPropagation();
   event.preventDefault();

  //  setTrainper("");
   trainper.current.value = "";
   trainobj.current.value = "";
   trainsyl.current.value = "";
   labsyl.current.value = "";
   forceUpdate();

}

const handleSubmittrainsyl = async(event) => {
   event.stopPropagation();
   event.preventDefault();

      let  trainernamenya = trainername.current;
      let  invitecodenya = invitecode.current;
      let trainobjnya = trainobj.current.value;
      let trainpernya = trainper.current.value;
      let trainsylnya = trainsyl.current.value;
      let labsylnya = labsyl.current.value;

if(trainobjnya !== "" && trainpernya !== "" && trainsylnya !== "" && labsylnya !== ""){
 let fromtrainsyl = {"trainername": trainernamenya, "invitecode": invitecodenya, "trainobj": trainobjnya, 
   "trainper": trainpernya, "trainsyl": trainsylnya, "labsyl": labsylnya } 

console.log(fromtrainsyl);

await fetch("https://localhost/trainer", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(fromtrainsyl)
}).then((response) =>  response.json()
       ).then(function(data){
             console.log(data)
    if(data.result === "success"){
        props.backoutfromtrainsyl("true");
}   
   
});
}      
}

return(
<div className="Outertrainerpage">
<div className="Leftsidetrainerdiv">
<div className="Trainernametextdiv">
<span className="Trainernamespan">Trainer Name: </span>
</div>
<div className="Trainernamediv">
<span className="Trainerspan">{trainername.current}</span>
</div>
<div className="Invitecodetraintextdiv">
<span className="Invitecodetraintextspan">Invitation code: </span>
</div>
<div className="Invitecodetraindiv">
<span className="Invitecodetrainspan">{invitecode.current}</span>
</div>
<div className="Trainingobjectivetextdiv">
<span className="Trainingobjectspan" >Training Objective:</span>
</div>
<div className="Trainingobjectiveinputdiv">
<textarea type="text" className="Trainingobjectiveinputta"  ref={trainobj} />
</div>
<div className="Trainingperiodtextdiv">
<span className="Trainingperiodspan" >Training Period:</span>
</div>
<div className="Trainingperiodinputdiv">
<input type="text" className="Trainingperiodinput"  ref={trainper}/>
</div>
</div> {/* closing for leftsidediv */}
<div className="Rightsidetrainerdiv">
<div className="Trainingsyllabustextdiv">
<span className="Trainingsyllabusspan" >Training Syllabus:</span>
</div>
<div className="Trainingsyllabusinputdiv">
<textarea type="text" className="Trainingsyllabusinputta"  ref={trainsyl}/>
</div>
<div className="Labsyllabustextdiv">
<span className="Labsyllabusspan" >Lab Syllabus:</span>
</div>
<div className="Labsyllabusinputdiv">
<textarea type="text" className="Labsyllabusinputta"  ref={labsyl}/>
</div>
<div className="Resetsubmitbuttontraindiv">
<button className="Resetbutton" onClick={(e) => handleResettrainsyl(e)} >Reset</button>
<button className="Submitbutton" onClick={(e) => handleSubmittrainsyl(e)} >Submit</button>
</div>
</div> {/* closing for rightsidediv */}
</div>
);
}

export default Trainersyllabus;
