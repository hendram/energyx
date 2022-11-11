import React, {useRef} from 'react';
import './Labsyl.css';
import BundledEditor from './BundledEditor';


const Labsyl = (props) => {

const editorRef = useRef(null);

const handleClick = (event) => {
   event.stopPropagation();
   event.preventDefault();
    props.backtoorigin();
}


 if(props.labsylcontent){
   editorRef.current.setContent(props.labsylcontent);
        editorRef.current.mode.set('readonly');
}

return(
<div className="Labsylmain">
<div className="Labsyltopdiv">
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
</div> {/* closing for labsyltopdiv */}
<button onClick={(e) => handleClick(e)} className="Backbutton" >Back</button>
</div>
);
}

export default Labsyl;
