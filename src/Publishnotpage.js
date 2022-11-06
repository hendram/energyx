import React, {useRef} from 'react';
import './Publishnotpage.css';

const Publishnotpage = (props) => {

const porn = useRef({publish: "Publishhid", nopublish: "Notpublishhid"});

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


return(
<div className="Outerpublishnotpage">
<div className="Trainernametextdiv">
<span>Trainer Name: </span>
</div>
<div className="Trainernamenyatextdiv">
<span>{props.trainername}</span>
</div>
<button>Training Objective</button>
<button>Training Period</button>
<button>Training Syllabus</button>
<button>Lab Syllabus</button>
<div className={porn.current.publish}>
<button>Publish</button>
</div>
<div className={porn.current.nopublish}>
<button>No Publish</button>
</div>
</div>
);

}

export default Publishnotpage;
