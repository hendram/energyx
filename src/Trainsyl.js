import React, {useRef} from 'react';
import './Trainsyl.css';
import BundledEditor from './BundledEditor';

const Trainsyl = (props) => {

const editorRef = useRef(null);


const handleClick = (event) => {
   event.stopPropagation();
   event.preventDefault();
    props.backtoorigin();
}

 if(props.trainsylcontent){
   editorRef.current.setContent(props.trainsylcontent);
        editorRef.current.mode.set('readonly');
}



return(
<div className="Trainsylmain">
<div className="Trainsyltopdiv">
<BundledEditor 
        onInit={(evt, editor) => editorRef.current = editor}
        init={{
          branding: false,
          statusbar: false,
          width: "86vw",
          height: "88vh",
          menubar: false,
          toolbar: "" ,
        }}
      />  
</div> {/* closing for Trainsyltopdiv */}
<button onClick={(e) => handleClick(e)} className="Backbuttontrain" >Back</button>
</div>
);
}

export default Trainsyl;
