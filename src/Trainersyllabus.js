import React, { useState, useRef } from 'react';
import './Trainersyllabus.css';
import Emitter from './Emitter';
import BundledEditor from './BundledEditor';

const Trainersyllabus = (props) => {

const inputtype = useRef({nameinput: "Nameinputgrey", positioninput: "Positioninputgrey", 
traininginput: "Traininginputgrey"});
// const [trainerper, setTrainerper] = useState("Please input your training class length, how many days, etc");
// const  trainpercol = useRef(color: "trainper"}); 

const trainername = useRef(null);
const invitecode = useRef(null);
const classtitle = useRef(null);
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
   
   classtitle.current.value = "";
   trainper.current.value = "";
   trainobj.current.setContent("");
   trainsyl.current.setContent("");
   labsyl.current.setContent("");
   forceUpdate();

}

const handleSubmittrainsyl = async(event) => {
   event.stopPropagation();
   event.preventDefault();

      let  trainernamenya = trainername.current;
      let  invitecodenya = invitecode.current;
      let classtitlenya = classtitle.current.value;
      let trainobjnya = trainobj.current.getContent();
      let trainpernya = trainper.current.value;
      let trainsylnya = trainsyl.current.getContent();
      let labsylnya = labsyl.current.getContent();

if(trainobjnya !== "" && trainpernya !== "" && trainsylnya !== "" && labsylnya !== ""){
 let fromtrainsyl = {"trainername": trainernamenya, "invitecode": invitecodenya, "classtitle": classtitlenya, 
"trainobj": trainobjnya, "trainper": trainpernya, "trainsyl": trainsylnya, "labsyl": labsylnya } 

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
<div className="Classtitlediv">
<span className="Classtitlespan" >Class title:</span>
</div>
<div className="Classtitleinputdiv">
<input type="text" className="Classtitleinput"  ref={classtitle}/>
</div>
<div className="Trainingobjectivetextdiv">
<span className="Trainingobjectspan" >Training Objective:</span>
</div>
<BundledEditor 
        onInit={(evt, editor) => trainobj.current = editor}
        init={{
          branding: false,
          statusbar: false,
          width: "40vw",
          height: "11vh",
          menubar: false,
          toolbar: "" ,
plugins: "paste",
    paste_as_text: true

        }}
      />  

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
<BundledEditor 
        onInit={(evt, editor) => trainsyl.current = editor}
        init={{
          branding: false,
          statusbar: false,
          width: "40vw",
          height: "22vh",
          menubar: false,
          toolbar: "" ,
plugins: "paste",
    paste_as_text: true
        }}
      />  

<div className="Labsyllabustextdiv">
<span className="Labsyllabusspan" >Lab Syllabus:</span>
</div>
<BundledEditor 
        onInit={(evt, editor) => labsyl.current = editor}
        init={{
          branding: false,
          statusbar: false,
          width: "40vw",
          height: "18vh",
          menubar: false,
          toolbar: "" ,
     plugins: "paste",
    paste_as_text: true
        }}
      />  

<div className="Resetsubmitbuttontraindiv">
<button className="Resetbutton" onClick={(e) => handleResettrainsyl(e)} >Reset</button>
<button className="Submitbutton" onClick={(e) => handleSubmittrainsyl(e)} >Submit</button>
</div>
</div> {/* closing for rightsidediv */}
</div>
);
}

export default Trainersyllabus;
