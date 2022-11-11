import React, {useRef, useContext} from 'react';
import './Listedclasscontent.css';
import {MainContext1} from './EnergyxMain';
import {MainContext2} from './EnergyxMain';
import {MainContext3} from './EnergyxMain';


const Listedclasscontent = (props) => {

const a = useContext(MainContext1);
const b = useContext(MainContext2);
const c = useContext(MainContext3);


function eventhelper(event) {
    event.stopPropagation();
   event.preventDefault();
}

const handleTrainobjclick = (event) => {
    eventhelper(event);
       a.trainobjopen(props.trainobj, "listedclass");
}


const handleTrainsylclick = (event) => {
    eventhelper(event);
       b.trainsylopen(props.trainsyl, "listedclass");
}

const handleLabsylclick = (event) => {
    eventhelper(event);
       c.labsylopen(props.labsyl, "listedclass");
} 



return(
<div className="Listedclasscontentpage">
<div className="Listedclasstitlerowdiv">
<div className="Listedclasstitlenyapublishtextdiv">
{props.classtitle}
</div>
</div> {/* closing for classtitlerowdiv */}
<div className="Listedtrainernamerowdiv">
<div className="Listedtrainernamepublishtextdiv">
Trainer Name: 
</div>
<div className="Listednamenyapublishtextdiv">
{props.trainername}
</div>
</div> {/* closing for trainernamerowdiv */}
<div className="Listedtrainingpartdiv">
<div className="Listedtrainperdiv">
<div className="Listedtrainpertext">Training Period:</div>
<div className="Listedtrainperprops">{props.trainper}</div>
</div>
<div className="Listedtrainbutdiv">
<button className="Listedtrainobjbut" onClick={(e) => handleTrainobjclick(e)} >Training Objective</button>
<button className="Listedtrainsylbut"  onClick={(e) => handleTrainsylclick(e)} >Training Syllabus</button>
<button className="Listedlabsylbut"  onClick={(e) => handleLabsylclick(e)} >Lab Syllabus</button>
</div> {/* closing for trainbutdiv */}
</div> {/* closing for trainingpartdiv */}
</div>
);

}

export default Listedclasscontent;
