import React from 'react';
import './Trainsyl.css';

const Trainsyl = (props) => {

const handleClick = (event) => {
   event.stopPropagation();
   event.preventDefault();
    props.backtoorigin();
}


return(
<div className="Trainsylmain">
<div className="Trainsyltopdiv">
<textarea className="Trainsylta" value={props.trainsylcontent}/>
</div> {/* closing for Trainsyltopdiv */}
<button onClick={(e) => handleClick(e)} className="Backbutton" >Back</button>
</div>
);
}

export default Trainsyl;
