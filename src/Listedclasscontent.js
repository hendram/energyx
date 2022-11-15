import React, {useRef, useContext, useEffect} from 'react';
import './Listedclasscontent.css';
import {MainContext1} from './EnergyxMain';
import {MainContext2} from './EnergyxMain';
import {MainContext3} from './EnergyxMain';


const Listedclasscontent = (props) => {

const a = useContext(MainContext1);
const b = useContext(MainContext2);
const c = useContext(MainContext3);

const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), [])


const conform = useRef({vis: "Conformhid"});

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

const checkjumlah = () => {
    if(props.jumlah !== 0){
       conform.current.vis= "Conformshow";
       forceUpdate();
  }
}

useEffect(() => {
   checkjumlah();
}, []); 

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
<div className="Listedtrainbutdiv">

<button className="Listedtrainobjbut" onClick={(e) => handleTrainobjclick(e)} >Training Objective</button>
<button className="Listedtrainsylbut"  onClick={(e) => handleTrainsylclick(e)} >Training Syllabus</button>
<button className="Listedlabsylbut"  onClick={(e) => handleLabsylclick(e)} >Lab Syllabus</button>
</div> {/* closing for listedtrainbutdiv */}
<div className="Listedtrainwhendiv">
<div className="Listedtrainwhentext">When:</div>
<div className="Listedtrainwhenprops">{props.trainper}</div>
</div> {/* closing for listedtrainwhendiv */} 
<div className={conform.current.vis}>
<div className="Listedjumlahtextdiv" >
Jumlah:
</div>
<div className="Listedjumlahtextnya">
{props.jumlah}
</div>
</div> {/* closing for conform.current.vis */}
</div> {/* closing for listedtrainingpartdiv */}
</div>
);

}

export default Listedclasscontent;
