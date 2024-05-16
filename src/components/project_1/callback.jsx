import React from 'react';

const Callback = ({ getColor }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const color = e.target.color.value;
    getColor(color); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <br/>
      <input type="color" id="colorInput" name="color" />
      <br/><br/>
      <button type="submit">Set Color</button>
    </form>
  );
};

export default Callback;
