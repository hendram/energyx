import React, {useState, useRef} from 'react';
import './EnergyxMain.css';
import Chevrondown from './Chevrondown';
import Energyxpng from './Energyx.png';
import Front from './Front';
import Back from './Back';
import Connectivity from './Connectivity';
import Signinpage from './Signinpage';
import Testimonial from './Testimonial';
import Adminpage from './Adminpage';
import Testiinput from './Testiinput';
import Trainersyllabus from './Trainersyllabus';

const EnergyxMain = () => {
    
const [menuover, setMenuover] = useState({ insidediv: 'no', trainingover: 'Trainingoverhid'}); 
const custtrain = useRef({vis: 'null'});
const [bottomchoice, setBottomchoice] = useState({ testi: "Testishow", cust: "Customerhid", 
train: "Trainhid" });
const [admintopbottomdiv, setAdmintopbottomdiv] = useState({admin: "Adminpagehid", 
topbottomdiv: "Topinsidebottomdivshow", middlediv: "Middledivshow", bottomdiv: "Bottomdivshow",
testiinput: "Testiinputhid", trainersyllabus: "Trainersyllabushid",
trainingobjective: "Trainobjhid", trainingperiod: "Trainperhid", trainingsyllabus: "Trainsylhid", 
labsyllabus: "Labsylhid", listedclass: "Listedclasshid"});


const opentrainsyllabus = (truefalse) => {
    if(truefalse === "true"){
        if(admintopbottomdiv.trainersyllabus === "Trainersyllabushid"){
          let newadmintopbottomdiv = {admin: "Adminpagehid", 
topbottomdiv: "Topinsidebottomdivhid", middlediv: "Middledivshow", bottomdiv: "Bottomdivshow",
testiinput: "Testiinputhid", trainersyllabus: "Trainersyllabusshow",
trainingobjective: "Trainobjhid", trainingperiod: "Trainperhid", trainingsyllabus: "Trainsylhid", 
labsyllabus: "Labsylhid", listedclass: "Listedclasshid" }
          setAdmintopbottomdiv(newadmintopbottomdiv);
}
}
}

const opentestiin = (truefalse) => {
    if(truefalse === "true"){
        if(admintopbottomdiv.testiinput === "Testiinputhid"){
          let newadmintopbottomdiv =  {admin: "Adminpagehid", 
topbottomdiv: "Topinsidebottomdivhid", middlediv: "Middledivshow", bottomdiv: "Bottomdivshow",
testiinput: "Testiinputshow", trainersyllabus: "Trainersyllabusshow",
trainingobjective: "Trainobjhid", trainingperiod: "Trainperhid", trainingsyllabus: "Trainsylhid", 
labsyllabus: "Labsylhid", listedclass: "Listedclasshid" };
          setAdmintopbottomdiv(newadmintopbottomdiv);
}
}
}

const backfromtesti = (truefalse) => {
   if(truefalse === "true"){
 if(admintopbottomdiv.topbottomdiv === "Topinsidebottomdivhid"){
          let newadmintopbottomdiv =  {admin: "Adminpagehid", 
topbottomdiv: "Topinsidebottomdivshow", middlediv: "Middledivshow", bottomdiv: "Bottomdivshow",
testiinput: "Testiinputhid", trainersyllabus: "Trainersyllabushid",
trainingobjective: "Trainobjhid", trainingperiod: "Trainperhid", trainingsyllabus: "Trainsylhid", 
labsyllabus: "Labsylhid", listedclass: "Listedclasshid" };
          setAdmintopbottomdiv(newadmintopbottomdiv);
}
}
}       


const backoutfromtrain = (truefalse) => {
   if(truefalse === "true"){
 if(admintopbottomdiv.topbottomdiv === "Topinsidebottomdivhid"){
          let newadmintopbottomdiv =  {admin: "Adminpagehid", 
topbottomdiv: "Topinsidebottomdivshow", middlediv: "Middledivshow", bottomdiv: "Bottomdivshow",
testiinput: "Testiinputhid", trainersyllabus: "Trainersyllabushid",
trainingobjective: "Trainobjhid", trainingperiod: "Trainperhid", trainingsyllabus: "Trainsylhid", 
labsyllabus: "Labsylhid", listedclass: "Listedclasshid" };
          setAdmintopbottomdiv(newadmintopbottomdiv);
}
}
}

const openedadmin = (truefalse) => {
    if(truefalse === "true"){
        if(admintopbottomdiv.admin === "Adminpagehid"){
          let newadmintopbottomdiv =  {admin: "Adminpageshow", 
topbottomdiv: "Topinsidebottomdivhid", middlediv: "Middledivdiv", bottomdiv: "Bottomdivhid",
testiinput: "Testiinputhid", trainersyllabus: "Trainersyllabushid",
trainingobjective: "Trainobjhid", trainingperiod: "Trainperhid", trainingsyllabus: "Trainsylhid", 
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
topbottomdiv: "Topinsidebottomdivshow", middlediv: "Middledivshow", bottomdiv: "Bottomdivshow",
testiinput: "Testiinputhid", trainersyllabus: "Trainersyllabushid",
trainingobjective: "Trainobjhid", trainingperiod: "Trainperhid", trainingsyllabus: "Trainsylhid", 
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
topbottomdiv: "Topinsidebottomdivshow", middlediv: "Middledivshow", bottomdiv: "Bottomdivshow",
testiinput: "Testiinputhid", trainersyllabus: "Trainersyllabushid",
trainingobjective: "Trainobjhid", trainingperiod: "Trainperhid", trainingsyllabus: "Trainsylhid", 
labsyllabus: "Labsylhid", listedclass: "Listedclasshid" };

        custtrain.current.vis = "customerclick";

         setBottomchoice(newbottomchoice);
         setAdmintopbottomdiv(newadmintopbottomdiv);
          
  }
}

return(
<div className="Mostouterdiv">
<div className="Topdiv">
<div className="Topinsidediv">
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
<Adminpage />
</div>
<div className={admintopbottomdiv.trainersyllabus} >
<Trainersyllabus backoutfromtrainsyl={backoutfromtrain}/>
</div>
<div className={admintopbottomdiv.testiinput} >
<Testiinput backoutfromtesti={backfromtesti} />
</div>
<div className={admintopbottomdiv.topbottomdiv}>
<div className="Topinsidebottomleftdiv">
<div className="Companyuitextdiv">
<div className="Companyuifirsttextdiv">
<span> We help your company to build 
   your brand through UI </span>
</div>
<div className="Companyuisecondtextdiv">
<span> Good signature UI will impress 
 your clients, partner, and employee 
 and makes them remember it's your brand </span>
</div>
</div>  {/* closing for companyuitextdiv */}
</div> {/* closing for topinsidebottomleftdiv */}
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
<div className={admintopbottomdiv.middlediv}>
<div className="Middleleftdiv">
<span> Flexible & Viewable Web UI Template </span>
</div>
<div className="Middlerightdiv">
<span> Direct view your Web UI template before last touch will 
 makes your Web apps get lasting impression. </span> 
</div>
</div> {/* closing for middlediv */}
<div className={admintopbottomdiv.bottomdiv}>
<div className="Backenddiv">
<div className="Backendlogodiv">
<div className="Backendboxdiv">
<Back />
</div>
</div> {/* closing for backendlogodiv */}
<div className="Backendtitletextdiv">
<div className="Backendtitlediv">
<span>Backend</span>
</div>
<div className="Backendtextdiv">
<span>We help build your backend better, connecting to any kind of databases, IOT based system, 
or Web3 dapps</span>
</div>
</div> {/* closing for backendtitletextdiv */}
</div> {/* closing for backenddiv */}
<div className="Frontenddiv">
<div className="Frontendlogodiv">
<div className="Frontendboxdiv">
<Front />
</div>
</div>  {/* closing for frontendlogodiv */}
<div className="Frontendtitletextdiv">
<div className="Frontendtitlediv">
<span> Frontend</span>
</div>
<div className="Frontendtextdiv">
<span> We design and implemented any kind of frontend your apps required, uniquely and secure </span>
</div>
</div> {/* closing for frontendtitletextdiv */}
</div> {/* closing for frontenddiv */}
<div className="Connectivitydiv">
<div className="Connectivitylogodiv">
<div className="Connectivityboxdiv">
<Connectivity />
</div>
</div> {/* closing for connectivitylogdiv */}
<div className="Connectivitytitletextdiv">
<div className="Connectivitytitlediv">
<span> Connectivity </span>
</div>
<div className="Connectivitytextdiv">
<span> We connecting your frontend to your backend using any kind of technology, some of 
them are rest api, websocket, soap </span>
</div>
</div> {/* closing for connectivitytitletextdiv */}
</div>  {/* closing for connectivitydiv */}
</div> {/* closing for bottomdiv */}
</div>
);
}

export default EnergyxMain;
