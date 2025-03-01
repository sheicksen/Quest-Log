import { useState } from 'react';
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
const flower = {
    stage:[Seed, Flower1, Flower2, Flower3, Flower4, Flower5, Flower6, Flower7, Flower8, Flower9, Flower10, Flower11],
    end: Withered
}
export function Flower(){
    let [flowerStage, setFlowerStage] = useState(4);
    return (
        <img class="pixel-art" height="500px" width="500px" src={false ? flower.end : flower.stage[flowerStage]} alt=""></img>
    );
}
