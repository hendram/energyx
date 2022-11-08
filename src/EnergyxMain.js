import React, {useState, useRef, createContext} from 'react';
import './EnergyxMain.css';
import Chevrondown from './Chevrondown';
import Energyxpng from './Energyx.png';
import Workshop from './Workshop';
import Trainingprof from './Trainingprof';
import Certificate from './Certificate';
import Signinpage from './Signinpage';
import Testimonial from './Testimonial';
import Adminpage from './Adminpage';
import Testiinput from './Testiinput';
import Trainersyllabus from './Trainersyllabus';
import Classsample from './Classsample';
import Trainsyl from './Trainsyl';
import Labsyl from './Labsyl';

export const MainContext1 = React.createContext(null);
export const MainContext2 = React.createContext(null);
export const MainContext3 = React.createContext(null);

const EnergyxMain = () => {
    
const [menuover, setMenuover] = useState({ insidediv: 'no', trainingover: 'Trainingoverhid'}); 
const custtrain = useRef({vis: 'null'});
const [bottomchoice, setBottomchoice] = useState({ testi: "Testishow", cust: "Customerhid", 
train: "Trainhid" });
const [admintopbottomdiv, setAdmintopbottomdiv] = useState({admin: "Adminpagehid", 
topdiv: "Topdivsmall", topinsidediv: "Topinsidedivsmall", topbottomdiv: "Topinsidebottomdivshow", 
bottomdiv: "Bottomdivshow",
testiinput: "Testiinputhid", trainersyllabus: "Trainersyllabushid",
trainingobjective: "Trainobjhid", trainingsyllabus: "Trainsylhid", 
labsyllabus: "Labsylhid", listedclass: "Listedclasshid"});

const trainsylcon = useRef("");
const labsylcon = useRef("");
const fromwhere = useRef("");

const backorigin = () => {
    console.log(fromwhere.current);
     if(fromwhere.current === "admin"){
         openedadmin("true");
}
}

const trainobjopen = (isiobjective) => {
}

const trainsylopen = (isitrainsyllabus, darimana) => {

              trainsylcon.current = isitrainsyllabus;
              console.log(trainsylcon.current);
              fromwhere.current = darimana;

       if(admintopbottomdiv.trainingsyllabus === "Trainsylhid"){
          let newadmintopbottomdiv =  {admin: "Adminpagehid", 
topdiv: "Topdivlarge", topinsidediv: "Topinsidedivlarge", topbottomdiv: "Topinsidebottomdivhid", 
bottomdiv: "Bottomdivhid",
testiinput: "Testiinputhid", trainersyllabus: "Trainersyllabushid",
trainingobjective: "Trainobjhid", trainingsyllabus: "Trainsylshow", 
labsyllabus: "Labsylhid", listedclass: "Listedclasshid" };
          setAdmintopbottomdiv(newadmintopbottomdiv);
}
}

const labsylopen = (isilabsyllabus, darimana) => {

              labsylcon.current = isilabsyllabus;
              console.log(labsylcon.current);
              fromwhere.current = darimana;

       if(admintopbottomdiv.labsyllabus === "Labsylhid"){
          let newadmintopbottomdiv =  {admin: "Adminpagehid", 
topdiv: "Topdivlarge", topinsidediv: "Topinsidedivlarge", topbottomdiv: "Topinsidebottomdivhid", 
bottomdiv: "Bottomdivhid",
testiinput: "Testiinputhid", trainersyllabus: "Trainersyllabushid",
trainingobjective: "Trainobjhid", trainingsyllabus: "Trainsylhid", 
labsyllabus: "Labsylshow", listedclass: "Listedclasshid" };
          setAdmintopbottomdiv(newadmintopbottomdiv);
}
}

const opentrainsyllabus = (truefalse) => {
    if(truefalse === "true"){
        if(admintopbottomdiv.trainersyllabus === "Trainersyllabushid"){
          let newadmintopbottomdiv = {admin: "Adminpagehid", 
topdiv: "Topdivsmall", topinsidediv: "Topinsidedivsmall", topbottomdiv: "Topinsidebottomdivhid",
bottomdiv: "Bottomdivshow",
testiinput: "Testiinputhid", trainersyllabus: "Trainersyllabusshow",
trainingobjective: "Trainobjhid", trainingsyllabus: "Trainsylhid", 
labsyllabus: "Labsylhid", listedclass: "Listedclasshid" }
          setAdmintopbottomdiv(newadmintopbottomdiv);
}
}
}

const opentestiin = (truefalse) => {
    if(truefalse === "true"){
        if(admintopbottomdiv.testiinput === "Testiinputhid"){
          let newadmintopbottomdiv =  {admin: "Adminpagehid", 
topdiv: "Topdivsmall", topinsidediv: "Topinsidedivsmall", topbottomdiv: "Topinsidebottomdivhid", 
bottomdiv: "Bottomdivshow",
testiinput: "Testiinputshow", trainersyllabus: "Trainersyllabusshow",
trainingobjective: "Trainobjhid", trainingsyllabus: "Trainsylhid", 
labsyllabus: "Labsylhid", listedclass: "Listedclasshid" };
          setAdmintopbottomdiv(newadmintopbottomdiv);
}
}
}

const a: AppContext1 = {trainobjopen};
const b: AppContext1 = {trainsylopen};
const c: AppContext1 = {labsylopen};

const backfromtesti = (truefalse) => {
   if(truefalse === "true"){
 if(admintopbottomdiv.topbottomdiv === "Topinsidebottomdivhid"){
          let newadmintopbottomdiv =  {admin: "Adminpagehid", 
topdiv: "Topdivsmall", topinsidediv: "Topinsidedivsmall", topbottomdiv: "Topinsidebottomdivshow", 
bottomdiv: "Bottomdivshow",
testiinput: "Testiinputhid", trainersyllabus: "Trainersyllabushid",
trainingobjective: "Trainobjhid", trainingsyllabus: "Trainsylhid", 
labsyllabus: "Labsylhid", listedclass: "Listedclasshid" };
          setAdmintopbottomdiv(newadmintopbottomdiv);
}
}
}       


const backoutfromtrain = (truefalse) => {
   if(truefalse === "true"){
 if(admintopbottomdiv.topbottomdiv === "Topinsidebottomdivhid"){
          let newadmintopbottomdiv =  {admin: "Adminpagehid", 
topdiv: "Topdivsmall", topinsidediv: "Topinsidedivsmall", topbottomdiv: "Topinsidebottomdivshow", 
bottomdiv: "Bottomdivshow",
testiinput: "Testiinputhid", trainersyllabus: "Trainersyllabushid",
trainingobjective: "Trainobjhid", trainingsyllabus: "Trainsylhid", 
labsyllabus: "Labsylhid", listedclass: "Listedclasshid" };
          setAdmintopbottomdiv(newadmintopbottomdiv);
}
}
}

const openedadmin = (truefalse) => {
    if(truefalse === "true"){
        if(admintopbottomdiv.admin === "Adminpagehid"){
          let newadmintopbottomdiv =  {admin: "Adminpageshow", 
topdiv: "Topdivlarge", topinsidediv: "Topinsidedivlarge", topbottomdiv: "Topinsidebottomdivhid", 
bottomdiv: "Bottomdivhid",
testiinput: "Testiinputhid", trainersyllabus: "Trainersyllabushid",
trainingobjective: "Trainobjhid", trainingsyllabus: "Trainsylhid", 
labsyllabus: "Labsylhid", listedclass: "Listedclasshid" };
          setAdmintopbottomdiv(newadmintopbottomdiv);
}
}
}

const handleOvertr = (event) => {
      event.stopPropagation();
      event.preventDefault();

      if(menuover.trainingover === "Trainingoverhid"){
          let newmenuover = { insidediv: 'no', trainingover: 'Trainingovershow' };
          setMenuover(newmenuover);
      }
}   

const handleLeavetr = (event) => {
      event.stopPropagation();
      event.preventDefault();

      if(menuover.insidediv === "no" && menuover.trainingover === "Trainingovershow"){
              let newmenuover = { insidediv: 'no', trainingover: 'Trainingoverhid'  };
              setMenuover(newmenuover);
     }
}
 
const handleDivovertr = (event) => {
     event.stopPropagation();
      event.preventDefault();

     if(menuover.insidediv === "no"){
          let newmenuover = { insidediv: 'yes', trainingover: 'Trainingovershow' };
          setMenuover(newmenuover);
           }
 }

 
const handleDivleavetr = (event) => {
     event.stopPropagation();
      event.preventDefault();

     if(menuover.insidediv === "yes"){
          let newmenuover = { insidediv: 'no', trainingover: 'Trainingoverhid' };
          setMenuover(newmenuover);
           }
 }

const handleListedclass = (event) => {
     event.stopPropagation();
      event.preventDefault();

        
}

const handleTrainerregister = (event) => {
     event.stopPropagation();
      event.preventDefault();

      if(bottomchoice.train === "Trainhid"){
           let newbottomchoice = { testi: "Testihid", cust: "Customerhid", 
train: "Trainshow" };
        custtrain.current.vis = "trainerclick";
    let newadmintopbottomdiv =  {admin: "Adminpagehid", 
topdiv: "Topdivsmall", topinsidediv: "Topinsidedivsmall", topbottomdiv: "Topinsidebottomdivshow", 
bottomdiv: "Bottomdivshow",
testiinput: "Testiinputhid", trainersyllabus: "Trainersyllabushid",
trainingobjective: "Trainobjhid", trainingsyllabus: "Trainsylhid", 
labsyllabus: "Labsylhid", listedclass: "Listedclasshid" };

         setBottomchoice(newbottomchoice);
         setAdmintopbottomdiv(newadmintopbottomdiv);
  }

}

const handleCustomerpage = (event) => {
     event.stopPropagation();
      event.preventDefault();

      if(bottomchoice.cust === "Customerhid"){
           let newbottomchoice = { testi: "Testihid", cust: "Customershow", 
train: "Trainhid" };
    let newadmintopbottomdiv =  {admin: "Adminpagehid", 
topdiv: "Topdivsmall", topinsidediv: "Topinsidedivsmall", topbottomdiv: "Topinsidebottomdivshow", 
bottomdiv: "Bottomdivshow",
testiinput: "Testiinputhid", trainersyllabus: "Trainersyllabushid",
trainingobjective: "Trainobjhid", trainingsyllabus: "Trainsylhid", 
labsyllabus: "Labsylhid", listedclass: "Listedclasshid" };

        custtrain.current.vis = "customerclick";

         setBottomchoice(newbottomchoice);
         setAdmintopbottomdiv(newadmintopbottomdiv);
          
  }
}

return(
<div className="Mostouterdiv">
<div className={admintopbottomdiv.topdiv}>
<div className={admintopbottomdiv.topinsidediv}>
<div className="Topinsidetopdiv">
<div className="Topinsidetopleftdiv">
<img src={Energyxpng} className="Imagelogo" width="100%" height="100%"></img>
</div> {/* closing for topinsidetopleftdiv */}
<div className="Topinsidetoprightdiv">
<button className="Corporatebutton">
<span>Corporate</span>
</button>
<div className="Trainingmenubuttondiv">
<button className="Trainingbutton" onMouseOver={(e) => handleOvertr(e)}  onMouseLeave={(e) => handleLeavetr(e)} >
<span>Training</span>
<Chevrondown />
</button>
<div className={menuover.trainingover} onMouseOver={(e) => handleDivovertr(e)}
 onMouseLeave={(e) => handleDivleavetr(e)} >
<button className="Listedclassbutton" onClick={(e) => handleListedclass(e)}>
<span>Listed class</span>
</button>
<button className="Trainerregisterbutton" onClick={(e) => handleTrainerregister(e)} >
<span>Trainer Register</span>
</button>
<button className="Customerpagebutton" onClick={(e) => handleCustomerpage(e)} >
<span>Customer Page</span>
</button>
</div> {/* closing for menuover.trainingover */}
</div> {/* closing for trainingmenubutton */}
</div> {/* closing for topinsidetoprightdiv */}
</div>  {/* closing for topinsidetopdiv */}
<div className={admintopbottomdiv.admin} >
<MainContext1.Provider value={a}>
<MainContext2.Provider value={b}>
<MainContext3.Provider value={c}>
<Adminpage />
</MainContext3.Provider>
</MainContext2.Provider>
</MainContext1.Provider>
</div>
<div className={admintopbottomdiv.trainersyllabus} >
<Trainersyllabus backoutfromtrainsyl={backoutfromtrain}/>
</div>
<div className={admintopbottomdiv.trainingsyllabus} >
<Trainsyl trainsylcontent={trainsylcon.current} backtoorigin={backorigin}/>
</div>
<div className={admintopbottomdiv.labsyllabus} >
<Labsyl labsylcontent={labsylcon.current} backtoorigin={backorigin} />
</div>
<div className={admintopbottomdiv.testiinput} >
<Testiinput backoutfromtesti={backfromtesti} />
</div>
<div className={admintopbottomdiv.topbottomdiv}>
<div className="Classexamplediv">
<Classsample />
</div>  {/* closing for companyuitextdiv */}
<div className={bottomchoice.testi} >
<Testimonial /> 
</div>
<div className={bottomchoice.train} >
<Signinpage custortrain={custtrain.current.vis}  openadmin={openedadmin} opentrainersyllabus={opentrainsyllabus}/>
</div>
<div className={bottomchoice.cust} >
<Signinpage custortrain={custtrain.current.vis} opentestiinput={opentestiin}/>
</div>
</div> {/* closing for admintopbottomdiv.topbottomdiv */}
</div> {/* closing for topinsidediv */}
</div> {/* closing for Topdiv */}
<div className={admintopbottomdiv.bottomdiv}>
<div className="Proftraindiv">
<div className="Proftrainlogodiv">
<div className="Proftrainboxdiv">
<Trainingprof />
</div>
</div> {/* closing for Proftrainlogodiv */}
<div className="Proftraintitlecontentdiv">
<div className="Proftraintitletadiv">
<textarea readOnly className="Proftrainta" value="Professional Training"/>
</div>
<div className="Proftraincontenttadiv">
<textarea readOnly className="Proftraincontentta" value="We provide professional IT training to your 
company greatest asset. Help Your company growing your assets through education."/>
</div>
</div> {/* closing for Proftraintitletextdiv */}
</div> {/* closing for Proftraindiv */}
<div className="Workshopdiv">
<div className="Workshoplogodiv">
<div className="Workshopboxdiv">
<Workshop />
</div>
</div>  {/* closing for Workshoplogodiv */}
<div className="Workshoptitlecontentdiv">
<div className="Workshoptitletadiv">
<textarea readOnly className="Workshopta" value="Workshop" />
</div>
<div className="Workshopcontenttadiv">
<textarea readOnly className="Workshopcontentta" value="Our training class always provide workshop for 
all IT based training. Makes our professional student ready to do professional jobs instantly."/> 
</div>
</div> {/* closing for Workshoptitletextdiv */}
</div> {/* closing for Workshopdiv */}
<div className="Certificatediv">
<div className="Certificatelogodiv">
<div className="Certificateboxdiv">
<Certificate />
</div>
</div> {/* closing for Certificatelogdiv */}
<div className="Certificatetitlecontentdiv">
<div className="Certificatetitletadiv">
<textarea readOnly className="Certificateta" value="Certificate"/>
</div>
<div className="Certificatecontenttadiv">
<textarea readOnly className="Certificatecontentta" value="We provide certification for our graduate student.
Proving they have pass the exam and workshop and understand what the syllabus they have been taken." /> 
</div>
</div> {/* closing for certificatetitletextdiv */}
</div>  {/* closing for certificatediv */}
</div> {/* closing for bottomdiv */}
</div>
);
}

export default EnergyxMain;
