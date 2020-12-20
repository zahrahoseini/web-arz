import React from "react"
import './Body.css';
import  money from './image/money.svg';
import  coin from './image/coin.svg';
import  gold from './image/gold.svg';
import  tala from './image/tala.svg';
import  bit from './image/bitcoin.svg';
import usa from './flags/049-united states of america.svg';
import europ from './flags/europ.svg';
import uk from './flags/uk.svg';
import eng from './flags/eng.svg';
import can from './flags/can.svg';
import ost from './flags/ost.svg';
import sou from './flags/sou.svg';
import norv from './flags/norv.svg';
import rus from './flags/rus.svg';
import thi from './flags/thi.svg';
import sang from './flags/sang.svg';
import hong from './flags/hong.svg';
import azar from './flags/azar.svg';
import arm from './flags/arm.svg';
import don from './flags/don.svg';
import ema from './flags/ema.svg';
import jap from './flags/jap.svg';
import turk from './flags/turk.svg';
import chin from './flags/chin.svg';
import arab from './flags/arab.svg';
import ind from './flags/ind.svg';
import male from './flags/male.svg';
import afg from './flags/afg.svg';
import kov from './flags/kov.svg';
import iraq from './flags/iraq.svg';
import bah from './flags/bah.svg';
import oman from './flags/oman.svg';
import qatar from './flags/qatar.svg';

function Body() {
  return (
    <div className="Body">
        
      <div className="body_header">

       <div id="coin"> 
       <a href="#seke"><img id="h_img" src={coin} /></a>
       </div>

       <div id="curency"> 
       <a href="#cur"><img id="h_img" src={money} /></a>
       </div>

       <div id="gold"> 
       <a href="#tala"><img id="h_img" src={gold} /></a>
      </div>

      </div>

      <div className="body_main">


        <div id="cur"><p id="tittle_list">CURRENCY </p>
        <ul>
          <li id="style">
            <div id="flag">
            <img src={usa} />
            </div>
          </li>
          <li id="style">
            <div id="flag">
              <img src={europ} />
            </div>
            </li>  
          <li id="style">
            <div id="flag">
            <img src={uk} />
            </div>
            </li> 
            <li id="style">
          <div id="flag">
          <img src={eng} />
          </div>
          </li>
          <li id="style">
            <div id="flag">
            <img src={can} />
            </div>
          </li>
          <li id="style">
            <div id="flag">
            <img src={ost} />
            </div>
            </li>  
          <li id="style">
            <div id="flag">
            <img src={sou} />
            </div>
            </li> 
            <li id="style">
          <div id="flag">
          <img src={norv} />
          </div>
          </li>
          <li id="style">
            <div id="flag">
            <img src={rus} />
            </div>
          </li>
          <li id="style">
            <div id="flag">
            <img src={thi} />
            </div>
            </li>  
          <li id="style">
            <div id="flag">
            <img src={sang} />
            </div>
            </li> 
            <li id="style">
          <div id="flag">
          <img src={hong} />
          </div>
          </li>
          <li id="style">
            <div id="flag">
            <img src={azar} />
            </div>
          </li>
          <li id="style">
            <div id="flag">
            <img src={arm} />
            </div>
            </li>  
          <li id="style">
            <div id="flag">
            <img src={don} />
            </div>
            </li> 
            <li id="style">
          <div id="flag">
          <img src={ema} />
          </div>
          </li>
          <li id="style">
            <div id="flag">
            <img src={jap} />
            </div>
          </li>
          <li id="style">
            <div id="flag">
            <img src={turk} />
            </div>
            </li>  
          <li id="style">
            <div id="flag">
            <img src={chin} />
            </div>
            </li> 
            <li id="style">
          <div id="flag">
          <img src={arab} />
          </div>
          </li>
         
          <li id="style">
            <div id="flag">
            <img src={ind} />
            </div>
            </li>  
          <li id="style">
            <div id="flag">
            <img src={male} />
            </div>
            </li> 
            <li id="style">
          <div id="flag">
          <img src={afg} />
          </div>
          </li>
          <li id="style">
            <div id="flag">
            <img src={kov} />
            </div>
          </li>
          <li id="style">
            <div id="flag">
            <img src={iraq} />
            </div>
            </li>  
          <li id="style">
            <div id="flag">
            <img src={bah} />
            </div>
            </li> 
            <li id="style">
          <div id="flag">
          <img src={oman} />
          </div>
          </li>
          <li id="style">
          <div id="flag">
          <img src={qatar} />
          </div>
          </li>
        </ul>
        </div>

        <div id="seke"><p id="tittle_list">COIN </p>
        <ul>
          <li id="style">
          <div id="flag">
          <img src={coin} />
          </div>
          </li>
          <li id="style">
          <div id="flag">
          <img src={coin} />
          </div>
          </li>
          <li id="style">
          <div id="flag">
          <img src={coin} />
          </div>
          </li>
          <li id="style">
          <div id="flag">
            <img src={coin} />
          </div>
          </li>
        </ul>
        </div>

        <div id="tala"><p id="tittle_list">GOLD </p>
        <ul>
          <li id="style">
          <div id="flag">
          <img src={tala} />
          </div>
          </li>
          <li id="style">
          <div id="flag">
          <img src={tala} />
          </div>
          </li>
          <li id="style">
          <div id="flag">
          <img src={tala} />
          </div>
          </li>
          <li id="style">
          <div id="flag">
          <img src={bit} />
          </div>
          </li>
        </ul>
        </div>
      </div>
   
      <div className="body_footer">
      <p id="pro"> Producted By </p>
      Zahra Hoseini and Faeze Ghobadpanah
      </div>
    </div>
    
  );
}

export default Body;