import React from "react"
import './Body.css';
import  money from './image/money.svg';
import  coin from './image/coin.svg';
import  gold from './image/gold.svg';
function Body() {
  return (
    <div className="Body">
        
      <div className="body_header">

       <div id="coin"> 
       <img src={coin} />
       </div>

       <div id="curency"> 
        <img src={money} />
       </div>

       <div id="gold"> 
       <img src={gold} />
      </div>

      </div>

    </div>
  );
}

export default Body;