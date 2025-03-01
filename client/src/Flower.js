import { useState } from 'react';
import './App.css';
const flower = {
    stage:['./images/Seed.png', './images/Flower1.png','./images/Flower2.png','./images/Flower3.png','./images/Flower4.png','./images/Flower5.png','./images/Flower6.png','./images/Flower7.png','./images/Flower8.png','./images/Flower9.png', './images/Flower10.png', './images/Flower11.png'],
    end: './images/Withered.png'
}
export function Flower(){
    let [flowerStage, setFlowerStage] = useState(4);
    return (
        <img class="pixel-art" height="500px" width="500px" src={false ? flower.end : flower.stage[flowerStage]} alt=""></img>
    );
}
