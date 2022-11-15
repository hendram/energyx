import React from 'react';
import './Classsampleunit.css';

const Classsampleunit = (props) => {
      

return(
<div className="Classsampleuouter">
<div className="Judulclass">
{props.classtitle}
</div>
<div className="Whenclass">
{props.when}
</div>
</div>
);

}

export default Classsampleunit;
