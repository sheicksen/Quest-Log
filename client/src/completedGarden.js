import React, {useState} from 'react';
import { completeNonrepeat } from './goal';
import Flower11 from './images/Flower11.png';
import './App.css';

export function CompletedGarden() {
    /** This function places a flower at the bottom of the screen for every non-repeatable task completed
     * In goal.js the non-repeated tasks are pushed to an array titled completeNonrepeat upon completion
     * This file maps through this array and displays a flower
    */
    console.log("Comp garden",completeNonrepeat.length >= 1? completeNonrepeat : "Not yet initialized");
    return (
        <div class="bg-green-gradient center-content">
            <h1>Garden of Success</h1>
            <p>Never forget how much you've achieved.</p>
            <div class="completedGarden">
                {completeNonrepeat.map(((goal)=> 
                    <div >
                        <img class="pixel-art" height="100px" width="100px"  src={Flower11} alt="A flower for completing a task!"></img>
                        <p>{goal.name}</p>
                    </div>
                ))}
            </div>
        </div>

    )
        
}