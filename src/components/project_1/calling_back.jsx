import React, { useState } from 'react';
import Callback from '../project_1/callback';
import "../../styles/call.css";

function Calling() {
  const [UIcolor, setUIcolor] = useState(null);

  const getColor = (color) => {
    setUIcolor(color);
  };

  return (
    <div className="calling-container">
      <h1 className="title">Color updation from Child</h1>
      <div className='color-picker' style={{background: `${UIcolor}`}}>
        <h2>Color: {UIcolor}</h2>
      </div>
      <Callback getColor={getColor} /> 
    </div>
  );
}

export default Calling;
