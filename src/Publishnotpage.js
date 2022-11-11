import React, {useRef, useContext} from 'react';
import './Publishnotpage.css';
import {MainContext1} from './EnergyxMain';
import {MainContext2} from './EnergyxMain';
import {MainContext3} from './EnergyxMain';


const Publishnotpage = (props) => {

const porn = useRef({publish: "Publishhid", nopublish: "Notpublishhid"});
const a = useContext(MainContext1);
const b = useContext(MainContext2);
const c = useContext(MainContext3);

if(props.topublish === "yes"){
   if(porn.current.nopublish === "Notpublishhid"){ 
   porn.current = {publish: "Publishhid", nopublish: "Notpublishshow"};
    }
}
else if(props.topublish === "no"){
    if(porn.current.publish === "Publishhid"){
    porn.current = {publish: "Publishshow", nopublish: "Notpublishhid"};
}
}

function eventhelper(event) {
    event.stopPropagation();
   event.preventDefault();
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


const handlePublishclick = (event) => {
    eventhelper(event);
       props.topublishfrom(props.id, "yes");

}

const handleNopublishclick = (event) => {
    eventhelper(event);
       props.topublishfrom(props.id, "no");
}

return(
<div className="Outerpublishnotpage">
<div className="Classtitlerowdiv">
<div className="Classtitlenyapublishtextdiv">
{props.classtitle}
</div>
</div> {/* closing for classtitlerowdiv */}
<div className="Trainernamerowdiv">
<div className="Trainernamepublishtextdiv">
Trainer Name: 
</div>
<div className="Trainernamenyapublishtextdiv">
{props.trainername}
</div>
</div> {/* closing for trainernamerowdiv */}
<div className="Trainingpartdiv">
<div className="Trainperdiv">
<div className="Trainpertext">Training Period:</div>
<div className="Trainperprops">{props.trainper}</div>
</div>
<div className="Trainbutdiv">
<button className="Trainobjbut" onClick={(e) => handleTrainobjclick(e)} >Training Objective</button>
<button className="Trainsylbut"  onClick={(e) => handleTrainsylclick(e)} >Training Syllabus</button>
<button className="Labsylbut"  onClick={(e) => handleLabsylclick(e)} >Lab Syllabus</button>
<div className={porn.current.publish}>
<button className="Publishbut"  onClick={(e) => handlePublishclick(e)} >Publish</button>
</div>
<div className={porn.current.nopublish}>
<button className="Nopublishbut"  onClick={(e) => handleNopublishclick(e)} >No Publish</button>
</div>
</div> {/* closing for trainbutdiv */}
</div> {/* closing for trainingpartdiv */}
</div>
);

}

export default Publishnotpage;
