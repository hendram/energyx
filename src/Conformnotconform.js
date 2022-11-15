import React, {useRef, useContext, useState} from 'react';
import './Conformnotconform.css';
import {MainContext1} from './EnergyxMain';
import {MainContext2} from './EnergyxMain';
import {MainContext3} from './EnergyxMain';


const Conformnotconform = (props) => {

const porn = useRef({conform: "Conformhidadmin", noconform: "Notconformhidadmin"});
const a = useContext(MainContext1);
const b = useContext(MainContext2);
const c = useContext(MainContext3);

const [trainper, setTrainper] = useState(props.trainper);
const [jumlah, setJumlah] = useState(props.jumlah);

if(props.conform === "yes"){
   if(porn.current.noconform === "Notconformhidadmin"){ 
   porn.current = {conform: "Conformhidadmin", noconform: "Notconformshowadmin"};
    }
}
else if(props.conform === "no"){
    if(porn.current.conform === "Conformhidadmin"){
    porn.current = {conform: "Conformshowadmin", noconform: "Notconformhidadmin"};
}
}

function eventhelper(event) {
    event.stopPropagation();
   event.preventDefault();
}

const handleFocustrainper = (event) => {
    eventhelper(event);
    if(trainper !== ""){
      let newtrainper = "";
        setTrainper(newtrainper);
              
}
}

const handleChangetrainper = (event) => {
    eventhelper(event);

      let newtrainper = event.target.value;
       setTrainper(newtrainper);
}

const handleFocusjumlah = (event) => {
    eventhelper(event);
    if(jumlah.current !== ""){
      let newjumlah = "";
         setJumlah(newjumlah);
              
}
}

const handleChangejumlah = (event) => {
    eventhelper(event);
    let newjumlah = event.target.value;
      setJumlah(newjumlah);
}

const handleTrainobjclick = (event) => {
    eventhelper(event);
       a.trainobjopen(props.trainobj, "admin");
}


const handleTrainsylclick = (event) => {
    eventhelper(event);
       b.trainsylopen(props.trainsyl, "admin");
}

const handleLabsylclick = (event) => {
    eventhelper(event);
       c.labsylopen(props.labsyl, "admin");
} 


const handleConformclick = (event) => {
    eventhelper(event);
       props.toconformfrom(props.id, "yes", trainper, jumlah);

}

const handleNoconformclick = (event) => {
    eventhelper(event);
       props.toconformfrom(props.id, "no", trainper, jumlah);
}

return(
<div className="Outerconformnotpage">
<div className="Classtitlerowconformdiv">
<div className="Classtitlenyaconformtextdiv">
{props.classtitle}
</div>
</div> {/* closing for classtitlerowdiv */}
<div className="Trainernamerowconformdiv">
<div className="Trainernameconformtextdiv">
Trainer Name: 
</div>
<div className="Trainernamenyaconformtextdiv">
{props.trainername}
</div>
</div> {/* closing for trainernamerowdiv */}
<div className="Trainingpartconformdiv">
<div className="Trainperconformdiv">
<div className="Trainperconformtext">When:</div>
<div className="Trainperpropsconformdiv">
<input type="text" className="Trainperprops" value={trainper}  
onFocus={(e) => handleFocustrainper(e)} onChange={(e) => handleChangetrainper(e)}/>
</div>
</div>
<div className="Trainjumlahdiv">
<div className="Trainjumlahtext">Amount:</div>
<div className="Trainjumlahpropsdiv">
<input type="text" className="Trainjumlahprops" value={jumlah}  
onFocus={(e) => handleFocusjumlah(e)}  onChange={(e) => handleChangejumlah(e)}/>
</div>
</div>
<div className="Trainbutconformdiv">
<button className="Trainobjconformbut" onClick={(e) => handleTrainobjclick(e)} >Training Objective</button>
<button className="Trainsylconformbut"  onClick={(e) => handleTrainsylclick(e)} >Training Syllabus</button>
<button className="Labsylconformbut"  onClick={(e) => handleLabsylclick(e)} >Lab Syllabus</button>
<div className={porn.current.conform}>
<button className="Conformbutadmin"  onClick={(e) => handleConformclick(e)} >Conform</button>
</div>
<div className={porn.current.noconform}>
<button className="Noconformbutadmin"  onClick={(e) => handleNoconformclick(e)} >Noconform</button>
</div>
</div> {/* closing for trainbutdiv */}
</div> {/* closing for trainingpartdiv */}
</div>
);

}

export default Conformnotconform;
