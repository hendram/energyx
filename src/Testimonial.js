import React, {useRef, useEffect, useState} from 'react';
import './Testimonial.css';
import Triangleleft from './Triangleleft';
import Triangleright from './Triangleright';
import Circle from './Circle';
import BundledEditor from './BundledEditor';

const Testimonial = (props)  => {

const allval = useRef({train:[], testi:[], name:[], position:[], companyname:[]});
const train = useRef("");
const editorRef = useRef(null);
const name = useRef("");
const position = useRef("");
const companyname = useRef("");

const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), [])
const counter = useRef(0);
const [circlegroup, setCirclegroup] = useState([]);

function goin(x){
          train.current = allval.current.train[x];
           editorRef.current.setContent(allval.current.testi[x]);
           editorRef.current.mode.set('readonly');
          name.current = allval.current.name[x];
          position.current = allval.current.position[x];
          companyname.current = allval.current.companyname[x];
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
    circlegrfunc(allval.current.train.length, counter.current);
}
else {
    testifunc(allval.current.train.length - 1, "tleft");
}
}

const handleClickright = () => {

if(counter.current < (allval.current.train.length - 1)) {
    counter.current += 1;
    circlegrfunc(allval.current.train.length, counter.current);
}
else {
    testifunc(0, "notleft");
}
}
 
const flipcolorcircle = (max, idnya) => {
          circlegrfunc(max,idnya);
}
         
const testifunc = async(fromwhere, callfrom) => {
             let datafortestimoni = {"fortestimoni": "yes"};

await fetch("https://localhost/customer", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(datafortestimoni)
}).then((response) =>  response.json()
       ).then(function(data){
            if(data.answer){
            allval.current = {train:[], testi:[], name:[], position:[], companyname:[]};

        for(let x=0; x < data.answer.length; x++){
          allval.current.train.push(data.answer[x].training);
          allval.current.testi.push(data.answer[x].testimoni);
          allval.current.name.push(data.answer[x].name);
          allval.current.position.push(data.answer[x].position);
          allval.current.companyname.push(data.answer[x].companyname);
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

useEffect(() => {
testifunc(0, "notleft");
}, []);

return(
<div className="Testiouterpage">
<div className="Titletesti">
<span>{train.current}</span>
</div>
<div className="Contenttesti">
<div className="Testimonialtextdiv">
 <BundledEditor 
        onInit={(evt, editor) => editorRef.current = editor}
        init={{
          inline: true,
          branding: false,
          statusbar: false,
          menubar: false,
          toolbar: "" ,
        }}
      />  
</div>
<div className="Nametexttestimonialdiv">
<span>{name.current} </span>
</div>
<div className="Positiontexttestimonialdiv">
<span >{position.current} </span>
</div>
<div className="Companytexttestimonialdiv">
<span> {companyname.current} </span>
</div>
</div> {/* closing for contenttesti */} 
<div className="Slidetesti">
<Triangleleft handletriangleleft={handleClickleft} /> 
{circlegroup}
<Triangleright handletriangleright={handleClickright} /> 
</div>
</div>
);
}

export default Testimonial;
