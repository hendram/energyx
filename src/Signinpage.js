import React, {useState} from 'react';
import './Signinpage.css';

const Signinpage = (props) => {

const [sign, setSign] = useState({signup: "Signup2buttonhid", invitationcode: "Invitationcodehid",
repeatpassword: "Repeatpasswordtextinputdivhid", signin: "Signinbuttonshow"});

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
   <input type="text" className="Emailinput" />
    </div>
  </div> {/* closing for emailtextinputdiv */}
   <div className="Passwordtextinputdiv">
    <div className="Passwordtextspandiv">
  <span className="Passwordtextspan">Password: </span>
    </div>
     <div className="Passwordinputdiv">
   <input type="password" className="Passwordinput" />
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
    <input type="text" className="Inviteinput" />
   </div>
    </div> {/* closing for middlebottomdiv */}
</div>
<div className="Bottomsidediv">
<button className={sign.signin} >
<span>Sign in</span>
</button>
<button className={sign.signup} >
<span>Sign up</span>
</button>
</div>

</div>
);
}

export default Signinpage;
