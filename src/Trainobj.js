import React, {useRef} from 'react';
import './Trainobj.css';
import BundledEditor from './BundledEditor';


const Trainobj = (props) => {

const editorRef = useRef(null);

const handleClick = (event) => {
   event.stopPropagation();
   event.preventDefault();
    props.backtoorigin();
}

   if(props.trainobjcontent){
   editorRef.current.setContent(props.trainobjcontent);
        editorRef.current.mode.set('readonly');
}



return(
<div className="Trainobjmain">
<div className="Trainobjtopdiv">
<BundledEditor 
        onInit={(evt, editor) => editorRef.current = editor}
        init={{
          branding: false,
          statusbar: false,
          width: "86vw",
          height: "55vh",
          menubar: false,
          toolbar: "" ,
        }}
      />  
</div> {/* closing for Trainobjtopdiv */}
<button onClick={(e) => handleClick(e)} className="Backbuttontrainobj" >Back</button>
</div>
);
}

export default Trainobj;
