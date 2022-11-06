import React from 'react';

const Triangleleft = (props) => {

const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    props.handletriangleleft();
}

return(
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vh" fill="rgb(255,255,255)" 
viewBox="0 0 16 16" onClick={(e) => handleClick(e)} >
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 
1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
</svg>

</div>
);
}

export default Triangleleft;
