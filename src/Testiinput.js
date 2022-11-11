import React, { useState, useRef } from 'react';
import './Testiinput.css';
import Emitter from './Emitter';
import BundledEditor from './BundledEditor';

const Testiinput = (props) => {

const inputtype = useRef({nameinput: "Nameinputgrey", positioninput: "Positioninputgrey", 
traininginput: "Traininginputgrey"});

const customername = useRef(null);
const customerinvite = useRef(null);
const testimoniin = useRef(null);
const suggestionin = useRef(null);

const [trainingst, setTrainingst] = useState("Please input your taken training class here");
const [positionst, setPositionst] = useState("Please input your position in your company here");
const [namest, setNamest] = useState("Please input your name here");


const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), [])


const updatecustname = (accept) => {
     customername.current = accept.companynya;
     customerinvite.current = accept.invitecodenya;
     forceUpdate();
}

const numberCustomer = Emitter.listenerCount('dataforcustomer', updatecustname);
if(numberCustomer < 1){
    Emitter.on('dataforcustomer', updatecustname);
}

const handleFocustraining = (event) => {
   event.stopPropagation();
   event.preventDefault();

     setTrainingst("");      

     if(inputtype.current.traininginput === "Traininginputgrey"){
     inputtype.current.traininginput = "Traininginput";
     }
      forceUpdate();
}

const handleChangetraining = (event) => {
   event.stopPropagation();
   event.preventDefault();

     setTrainingst(event.target.value);      
}


const handleFocusposition = (event) => {
   event.stopPropagation();
   event.preventDefault();

     setPositionst("");      

     if(inputtype.current.positioninput === "Positioninputgrey"){
     inputtype.current.positioninput = "Positioninput";
     }
      forceUpdate();
}

const handleChangeposition = (event) => {
   event.stopPropagation();
   event.preventDefault();

     setPositionst(event.target.value);      
}


const handleFocusname = (event) => {
   event.stopPropagation();
   event.preventDefault();

     setNamest("");      

     if(inputtype.current.nameinput === "Nameinputgrey"){
     inputtype.current.nameinput = "Nameinput";
     }
      forceUpdate();
}

const handleChangename = (event) => {
   event.stopPropagation();
   event.preventDefault();

     setNamest(event.target.value);      
}

const handleResetbutton  = (event) => {
   event.stopPropagation();
   event.preventDefault();

     setPositionst("");
     setNamest("");
     setTrainingst("");
     testimoniin.current.setContent("");
     suggestionin.current.setContent("");       

    forceUpdate();
        }


const handleSubmitbutton  = async(event) => {
   event.stopPropagation();
   event.preventDefault();

         let companynamenya = customername.current;
         let invitecodenya = customerinvite.current;
         let testimoninya = testimoniin.current.getContent();
         let suggestionnya = suggestionin.current.getContent();

     console.log(testimoninya);

       if(testimoninya !== "" && positionst !== "" && namest !== "" && trainingst !== ""){         
         let datafromtestimoni = { "companyname": companynamenya, "invitecode": invitecodenya, 
"position": positionst, "name": namest, "training": trainingst, "testimoni": testimoninya, 
"suggestion": suggestionnya }

console.log(datafromtestimoni);

await fetch("https://localhost/customer", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(datafromtestimoni)
}).then((response) =>  response.json()
       ).then(function(data){
             console.log(data)
    if(data.result === "success"){
        props.backoutfromtesti("true");
}   
   
});
}

        }



return(
<div className="Outerpage">
<div className="Leftsidediv">
<div className="Companynametextdiv">
<span className="Companynamespan">Company Name: </span>
</div>
<div className="Companytextdiv">
<span className="Companyspan">{customername.current}</span>
</div>
<div className="Invitationcodetextdiv">
<span className="Invitationcodespan">Invitation Code:</span>
</div>
<div className="Invitecodetextdiv">
<span className="Invitecodespan">{customerinvite.current}</span>
</div>
<div className="Nametextdiv">
<span className="Namespan">Name:</span>
</div>
<div className="Nameinputdiv">
<input type="text" className={inputtype.current.nameinput} value={namest}
onFocus={(e) => handleFocusname(e)} onChange={(e) => handleChangename(e)} />
</div>
<div className="Positiontextdiv">
<span className="Positionspan">Position:</span>
</div>
<div className="Positioninputdiv">
<input type="text" className={inputtype.current.positioninput} value={positionst}
onFocus={(e) => handleFocusposition(e)} onChange={(e) => handleChangeposition(e)} />
</div>
<div className="Trainingtextdiv">
<span className="Trainingspan">Class Taken:</span>
</div>
<div className="Traininginputdiv">
<input type="text" className={inputtype.current.traininginput} value={trainingst}
onFocus={(e) => handleFocustraining(e)} onChange={(e) => handleChangetraining(e)} maxLength="800"/>
</div>

</div> {/* closing for leftsidediv */}
<div className="Rightsidediv">
<div className="Testimonitextdiv">
<span className="Testimonispan">Testimoni:</span>
</div>
<BundledEditor 
        onInit={(evt, editor) => testimoniin.current = editor}
        init={{
          branding: false,
          statusbar: false,
          width: "40vw",
          height: "28vh",
          menubar: false,
          toolbar: "" ,
       plugins: "paste",
    paste_as_text: true
        }}
      />  
<div className="Suggestiontextdiv">
<span className="Suggestionspan">Your suggestion:</span>
</div>
<BundledEditor 
        onInit={(evt, editor) => suggestionin.current = editor}
        init={{
          branding: false,
          statusbar: false,
          width: "40vw",
          height: "10vh",
          menubar: false,
          toolbar: "" ,
plugins: "paste",
    paste_as_text: true
        }}
      />  
<div className="Resetsubmitbuttondiv">
<button className="Resettestibutton" onClick={(e) => handleResetbutton(e)}>Reset</button>
<button className="Submittestibutton" onClick={(e) => handleSubmitbutton(e)} >Submit</button>
</div>
</div> {/* closing for rightsidediv */}
</div>
);
}

export default Testiinput;
