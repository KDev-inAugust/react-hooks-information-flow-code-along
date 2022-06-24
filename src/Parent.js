import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [smallSquare, setSmallSquare] = useState("#FFF")

  function handleChangeColor(){
    setColor(getRandomColor());
    setSmallSquare(getRandomColor());
  }

  
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleChangeColor} childColor={smallSquare}/>
      <Child onChangeColor={handleChangeColor} childColor={smallSquare}/>
    </div>
  );
}

export default Parent;
