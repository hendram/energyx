import React from 'react';

const Circle = (props) => {

const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

      props.afterclick(props.max, props.id);
}

return(
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vh" fill={props.color}  viewBox="0 0 16 16"
onClick={(e) => handleClick(e)} >
  <circle cx="8" cy="8" r="8"/>
</svg>
</div>
);
}

export default Circle;
