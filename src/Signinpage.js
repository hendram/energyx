import React, {useState, useRef} from 'react';
import './Signinpage.css';
import Emitter from './Emitter';

const Signinpage = (props) => {

const [sign, setSign] = useState({signup: "Signup2buttonhid", invitationcode: "Invitationcodehid",
repeatpassword: "Repeatpasswordtextinputdivhid", signin: "Signinbuttonshow"});
const email = useRef(null);
const password = useRef(null);
const invitecodesign = useRef(null);

async function sendSignupMess(){

if(props.custortrain  === "customerclick"   ){

      let emailnya = email.current.value;
      let passwordnya = password.current.value;
      let invitecodenya = invitecodesign.current.value;

    let datacustomer = { "email": emailnya, "password": passwordnya, "invitationcode": invitecodenya, 
  "fromsignup": "yes"}

    console.log(datacustomer);
   await fetch("https://localhost/customer", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(datacustomer)
}).then((response) =>  response.json()
       ).then(function(data){
          console.log(data)
        if(data.invitecode && data.companyname){
             props.opentestiinput("true");
            let datacomp = {"invitecodenya": data.invitecode, "companynya": data.companyname}; 
             Emitter.emit('dataforcustomer', datacomp);
}
});
}


else if(props.custortrain  === "trainerclick" ){

     let emailnya = email.current.value;
     let passwordnya = password.current.value;
      let invitecodenya = invitecodesign.current.value;

    let datatrainer = {"email": emailnya, "password": passwordnya, "invitationcode": invitecodenya, 
  "fromsignup": "yes" }

    console.log(datatrainer);
   await fetch("https://localhost/trainer", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(datatrainer)
}).then((response) =>  response.json()
       ).then(function(data){
          console.log(data)
        if(data.invitecode && data.trainername){
        props.opentrainersyllabus("true");
                 let senddatatrainer = {"trainername": data.trainername, "invitecode": data.invitecode};
             Emitter.emit('datafortrainer', senddatatrainer);
}
          
});
}
};
             

async function sendSigninMess(){

if(props.custortrain  === "trainerclick" ){

     let emailnya = email.current.value;
     let passwordnya = password.current.value;
    let datatrainer = {"email": emailnya, "password": passwordnya, "fromsignin": "yes" }

    console.log(datatrainer);
   await fetch("https://localhost/trainer", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(datatrainer)
}).then((response) =>  response.json()
       ).then(function(data){
          console.log(data)
        if(data.answer === "passadmin"){
        props.openadmin("true");
}
  else if(data.invitecode && data.trainername){
     let senddatatrainer = {"trainername": data.trainername, "invitecode": data.invitecode};
             Emitter.emit('datafortrainer', senddatatrainer)
        props.opentrainersyllabus("true");
          console.log(data.trainername);
}      
          
});
}


else if(props.custortrain  === "customerclick"   ){

      let emailnya = email.current.value;
      let passwordnya = password.current.value;

    let datacustomer = { "email": emailnya, "password": passwordnya, "fromsignin": "yes"}

    console.log(datacustomer);
   await fetch("https://localhost/customer", {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(datacustomer)
}).then((response) =>  response.json()
       ).then(function(data){
          console.log(data)
        if(data.invitecode && data.companyname){
             props.opentestiinput("true");
            let datacomp = {"invitecodenya": data.invitecode, "companynya": data.companyname}; 
             Emitter.emit('dataforcustomer', datacomp);

}
});
}
}

const handleSignin = async(event) => {
    event.stopPropagation();
    event.preventDefault();
   await sendSigninMess();    
     
}

const handleSignupsubmit = async(event) => {
    event.stopPropagation();
    event.preventDefault();
    await sendSignupMess();
}

const handleSignup = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if(sign.signin === 'Signinbuttonshow'){
    let newsign = {signup: 'Signup2buttonshow', invitationcode: 'Invitationcodeshow',
repeatpassword: "Repeatpasswordtextinputdivshow", signin: 'Signinbuttonhid'};
   setSign(newsign);
}
}


return(
<div className="Signpagediv">
  <div className="Topsidediv">
   <div className="Signuptextdiv">
   <span className="Signuptextspan"> Not sign up yet ? </span>
   </div>
    <div className="Signup1buttondiv">
   <button onClick={(e) => handleSignup(e)} className="Signup1button">
<span className="Signup1textbuttonspan">Sign up</span>
</button>
   </div>
</div>  {/* closing for Topsidediv */}
<div className="Middlesidediv">
 <div className="Emailtextinputdiv">
   <div className="Emailtextspandiv">
  <span className="Emailtextspan">Email: </span>
   </div>
   <div className="Emailinputdiv">
   <input type="text" className="Emailinput" ref={email} />
    </div>
  </div> {/* closing for emailtextinputdiv */}
   <div className="Passwordtextinputdiv">
    <div className="Passwordtextspandiv">
  <span className="Passwordtextspan">Password: </span>
    </div>
     <div className="Passwordinputdiv">
   <input type="password" className="Passwordinput" ref={password} />
    </div>
   </div> {/* closing for passwordtextinputdiv */}
   <div className={sign.repeatpassword}>
   <div className="Repeatpasswordtextspandiv">
  <span className="Repeatpasswordtextspan">Repeat Password: </span>
   </div>
   <div className="Repeatpasswordinputdiv">
   <input type="password" className="Repeatpasswordinput" />
     </div>
   </div> {/* closing for sign.repeatpassword */}
   <div className={sign.invitationcode}>
   <div className="Invitetextspandiv">
  <span className="Invitetextspan">Invitation code: </span>
   </div>
     <div className="Inviteinputdiv">
    <input type="text" className="Inviteinput" ref={invitecodesign} />
   </div>
    </div> {/* closing for middlebottomdiv */}
</div>
<div className="Bottomsidediv">
<button className={sign.signin} onClick={(e) => handleSignin(e)} >
<span>Sign in</span>
</button>
<button className={sign.signup} onClick={(e) => handleSignupsubmit(e)} >
<span>Sign up</span>
</button>
</div>

</div>
);
}

export default Signinpage;
