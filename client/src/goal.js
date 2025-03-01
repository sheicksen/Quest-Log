import React, {useState} from 'react';
import { NewGoalModal } from './newGoalModal';

export class GoalClass{
    name
    description
    repeatable
    streak
    complete
    constructor(name, description, repeatable){
        this.name = name
        this.description = description
        this.repeatable = repeatable
        this.streak = 0;
        this.complete = false
    };
};

export const goals = [];

export const Goal = () => {

    let [goalModalOpen, setGoalModalOpen] = useState(false);

    function markComplete(goal){
       goal.complete = true;
    }


    return (
        <div>
            {goals.map(function(goal){
                    return <li key={goal.name}>{goal.name}</li>
                  })}
            <button className="newGoal-button" onClick={() => setGoalModalOpen(true)}>Make New Goal</button>
            {console.log(goals)}
            {goalModalOpen && <NewGoalModal closeNewGoalModal={()=>{setGoalModalOpen(false)}}/>} 
            {
                //<button onClick={markComplete}>Mark as complete</button>
            }  
        </div>
    )
};