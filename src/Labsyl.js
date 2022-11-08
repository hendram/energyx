import React from 'react';
import './Labsyl.css';

const Labsyl = (props) => {

const handleClick = (event) => {
   event.stopPropagation();
   event.preventDefault();
    props.backtoorigin();
}

return(
<div className="Labsylmain">
<div className="Labsyltopdiv">
<textarea className="Labsylta" value={props.labsylcontent}/>
</div> {/* closing for labsyltopdiv */}
<button onClick={(e) => handleClick(e)} className="Backbutton" >Back</button>
</div>
);
}

export default Labsyl;
