import React, {useRef, useEffect, useState} from 'react';
import Listedclasscontent from './Listedclasscontent';
import './Listedclass.css';

const Listedclass = () => {

const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), [])
const alltrainval = useRef({trainername: [], classtitle: [], trainobj: [], trainper: [], jumlah: [], trainsyl: [], 
labsyl: [] });
const [listedclasscontent, setListedclasscontent] = useState([]);

const allintrainer = (datanya) => {
        let newlistedclasscontent = [];
      for(let k=0; k < datanya; k++){
          newlistedclasscontent.push(<Listedclasscontent id={k} trainername={alltrainval.current.trainername[k]}
classtitle={alltrainval.current.classtitle[k]} trainobj={alltrainval.current.trainobj[k]} 
trainper={alltrainval.current.trainper[k]} jumlah={alltrainval.current.jumlah[k]}
trainsyl={alltrainval.current.trainsyl[k]} labsyl={alltrainval.current.labsyl[k]}  />);
}

setListedclasscontent(newlistedclasscontent);
}


const getalltrainerdata = async() => {
  let trainerdataall = {"alltrainerdata": "yes", "untukpublish": "yes"}
      console.log(trainerdataall);

   await fetch("https://localhost/trainer", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(trainerdataall)
}).then((response) =>  response.json()
       ).then(function(data){
       alltrainval.current = {trainername: [], classtitle: [], trainobj: [], trainper: [], jumlah: [], trainsyl: [], 
labsyl: [], conform: [] };

          console.log(data);
         for(let x=0; x < data.answer.length; x++){
            if(data.answer[x].conform === "yes"){
         alltrainval.current.jumlah.push(data.answer[x].jumlah);
             }
          else{
             alltrainval.current.jumlah.push(0);
            }
        alltrainval.current.trainername.push(data.answer[x].trainername);
        alltrainval.current.classtitle.push(data.answer[x].classtitle);
        alltrainval.current.trainobj.push(data.answer[x].trainingobjective);
        alltrainval.current.trainper.push(data.answer[x].trainingperiod);
        alltrainval.current.trainsyl.push(data.answer[x].trainingsyllabus);
        alltrainval.current.labsyl.push(data.answer[x].labsyllabus);
        }
   allintrainer(data.answer.length);
     console.log(alltrainval.current.trainsyl[1]);
});
}



useEffect(() => {
   getalltrainerdata();
},[]);

return(
<div className="Listedclassmain">
<div className="Listedclassdiv">
<div className="Listedclasscontentdiv" >
{listedclasscontent}
</div>
</div>  {/* closing for listedclassdiv */}
</div>
);
}

export default Listedclass;
