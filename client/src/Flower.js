import { useState, useContext } from 'react';
import Flower1 from './images/Flower1.png';
import Flower2 from './images/Flower2.png';
import Flower3 from './images/Flower3.png';
import Flower4 from './images/Flower4.png';
import Flower5 from './images/Flower5.png';
import Flower6 from './images/Flower6.png';
import Flower7 from './images/Flower7.png';
import Flower8 from './images/Flower8.png';
import Flower9 from './images/Flower9.png';
import Flower10 from './images/Flower10.png';
import Flower11 from './images/Flower11.png';
import Seed from './images/Seed.png';
import Withered from './images/Withered.png';

import './App.css';
/* Flower Object 
* Contains references to all images of the flower
* stage: array from [0,11], starting with the seed and finalizing in a fully grown flower.
* end: withered flower image, displayed when a streak is broken
*/
const flower = {
    stage:[Seed, Flower1, Flower2, Flower3, Flower4, Flower5, Flower6, Flower7, Flower8, Flower9, Flower10, Flower11],
    end: Withered
}

export function Flower({flowerStage}){
    // If streak val >=0, a flower image will be displayed. If streakVal = -1, a withered flower will be displayed.
    console.log("Rerendering ", flowerStage);
    return (
        <div>
            <img class="pixel-art" height="500px" width="500px" src={flowerStage > 11 ? flower.end : flower.stage[flowerStage]} alt="Your streak flower!"></img>
            <p>Current Streak: {flowerStage}</p>
        </div>
    );
}
