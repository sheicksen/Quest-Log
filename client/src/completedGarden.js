import React, {useState} from 'react';
import { completeNonrepeat } from './goal';
import Flower11 from './images/Flower11.png';
import './App.css';

export function CompletedGarden() {
    return (
        <div class="completedGarden">
            {completeNonrepeat.map(((goal)=> 
                <div >
                    <img class="pixel-art" height="100px" width="100px"  src={Flower11} alt="Your streak flower!"></img>
                    {goal.name}
                </div>
            ))}
        </div>
    )
        
}