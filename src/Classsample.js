import React, {useRef, useEffect, useState} from 'react';
import './Classsample.css';
import Triangleleft from './Triangleleft';
import Triangleright from './Triangleright';
import Circle from './Circle';

const Classsample = (props)  => {

const allval = useRef({classname:[], contentclass:[]});
const classnamenya = useRef("");
const contentclassnya = useRef("");

const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), [])
const counter = useRef(0);
const [circlegroup, setCirclegroup] = useState([]);

function goin(x){
          classnamenya.current = allval.current.classname[x];
          contentclassnya.current = allval.current.contentclass[x];
  
}

const circlegrfunc = (maxlengthnya, idx) => {
    console.log('maxlengthnya', maxlengthnya);
    console.log('idxnya', idx);

    let resetcirclegroup = [...circlegroup];
     resetcirclegroup.length = 0;
       setCirclegroup(resetcirclegroup);

     let newcirclegroup = [];     
      

     for(let x=0; x < maxlengthnya; x++){
        if(idx === x){
         counter.current = idx;
      newcirclegroup.push(<Circle id={x} max={maxlengthnya} afterclick={flipcolorcircle} 
color={"rgb(0,0,0)"} />);
             goin(idx);
      }
      else {
      newcirclegroup.push(<Circle id={x} max={maxlengthnya} afterclick={flipcolorcircle} 
color={"rgb(255,255,255)"} />);
}
}
        setCirclegroup(newcirclegroup);

}

const handleClickleft = () => {

if(counter.current > 0) {
    counter.current -= 1;
    circlegrfunc(allval.current.classname.length, counter.current);
}
else {
    testifunc(allval.current.classname.length - 1, "tleft");
}
}

const handleClickright = () => {

if(counter.current < (allval.current.classname.length - 1)) {
    counter.current += 1;
    circlegrfunc(allval.current.classname.length, counter.current);
}
else {
    testifunc(0, "notleft");
}
}
 
const flipcolorcircle = (max, idnya) => {
          circlegrfunc(max,idnya);
}
         
const testifunc = async(fromwhere, callfrom) => {
             let dataforclasssample = {"forclasssample": "yes"};

await fetch("https://localhost/customer", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(dataforclasssample)
}).then((response) =>  response.json()
       ).then(function(data){
            if(data.answer){
            allval.current = {classname:[], contentclass:[] };

        for(let x=0; x < data.answer.length; x++){
          allval.current.classname.push(data.answer[x].classname);
          allval.current.contentclass.push(data.answer[x].contentclass);
      
}
         if(callfrom === "tleft" && (fromwhere < (data.answer.length - 1))){
              let fromwhere = data.answer.length - 1;        
          circlegrfunc(data.answer.length, fromwhere);
            goin(fromwhere);

}
else {
          circlegrfunc(data.answer.length, fromwhere);
      goin(fromwhere);
}

      forceUpdate();
      console.log(data.answer);
    }
   
});
}
/*
useEffect(() => {
testifunc(0, "notleft");
}, []);
console.log(circlegroup.length);
*/

return(
<div className="Classsampleouterpage">
<div className="Titleclasssample">
<span>{classnamenya.current}</span>
</div>
<div className="Contentclasssample">
<textarea readOnly className="Contentclasstextarea" value={contentclassnya.current}  /> 
</div> {/* closing for contenttesti */} 
<div className="Slideclasssample">
<Triangleleft handletriangleleft={handleClickleft} /> 
{circlegroup}
<Triangleright handletriangleright={handleClickright} /> 
</div>
</div>
);
}

export default Classsample;
