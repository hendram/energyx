import React, {useRef, useEffect, useState} from 'react';
import './Classsample.css';
import Classsampleunit from './Classsampleunit';

const Classsample = (props)  => {

const allval = useRef({classtitle:[], when:[]});

const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), [])
const [classunit, setClassunit] = useState([]);


const fillinclass = () => {
   let newclassunit = [];

    for(let x=0; x < 5; x++){     
    newclassunit.push(<Classsampleunit classtitle={allval.current.classtitle[x]} when={allval.current.when[x]} />);
     }
           setClassunit(newclassunit);
}

const classsamplefunc = async() => {
             let dataforclasssample = {"forclasssample": "yes"};

await fetch("https://localhost/trainer", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(dataforclasssample)
}).then((response) =>  response.json()
       ).then(function(data){
            if(data.answer){

        for(let x=0; x < data.answer.length; x++){
          allval.current.classtitle.push(data.answer[x].classtitle);
          allval.current.when.push(data.answer[x].trainingperiod);
      
}
fillinclass();
}

});
}

useEffect(() => {
  classsamplefunc();
},[]);


return(
<div className="Classsampleouterpage">
<div className="Latesttrainworkshop">
Latest Training and Workshop
</div>
<div className="Classsampleunitdiv">
{classunit} 
</div>  

</div>
);
}

export default Classsample;
