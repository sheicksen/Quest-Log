import React, {useState} from 'react';
import { NewGoalModal } from './newGoalModal';
import { InfoGoal } from './InfoGoal.js'

export class GoalClass{
    name
    description
    repeatable
    streak
    complete
    visible
    constructor(name, description, repeatable){
        this.name = name
        this.description = description
        this.repeatable = repeatable
        this.streak = 0
        this.complete = false
        this.visible = false
    };
};

export const goals = [];

export const Goal = () => {

    let [goalModalOpen, setGoalModalOpen] = useState(false);

   let [InfoModalOpen, setInfoModal] = useState(false);

   function flipVisibility(goal) {
        goal.visible === true ? goal.visible=false : goal.visible=true;
   }

    function markComplete(goal){
       goal.complete = true;
    }
    /*function flipVisibility(goal){
        (goal.visible===true) ? goal.visible = false : goal.visible = t
    }*/

    return (
        <div>
            <div className="goal-list-modal">
                {goals.map(function(goal){
                    return <div className="listed-goal">
                        <button onClick={()=>{goal.visible=true}}>
                        <li key={goal.name}>{goal.name}</li>
                        </button>
                        {goal.visible && <InfoGoal goal={goal} closeInfoModal={()=>{goal.visible=false}}/>}
                    </div>
                  })}
            </div>
            <button className="newGoal-button" onClick={() => setGoalModalOpen(true)}>Make New Goal</button>
            {console.log(goals)}
            {goalModalOpen && <NewGoalModal closeNewGoalModal={()=>{setGoalModalOpen(false)}}/>} 
        </div>
    )
};