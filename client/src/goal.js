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

   let [visible, setVisible] = useState(false);

   function flipVisibility(goal) {
        //const updatedGoals = goals.map((current) => current===goal ? {...goals, visible: !current.visible} : current);
        //goal.visible===true ? goal.visible = false : goal.visible = true;
        //setInfoModal(!InfoModalOpen);
        //setGoals(updatedGoals);
        setVisible(!visible);
   }

    /*function flipVisibility(goal){
        (goal.visible===true) ? goal.visible = false : goal.visible = true
    }*/

    /*return (
        <div>
            <div className="goal-list-modal">
                {goals.map((goal,index) => 
                     <div className="listed-goal">
                        <button onClick={()=>{flipVisibility(goal)}}>
                            {console.log(goal)}
                            {console.log(index)}
                        <li key={index}>{goal.name}</li>
                        </button>
                        {goal.visible && <InfoGoal goal={goal} closeInfoModal={(goal)=>{flipVisibility(goal)}}/>}
                    </div>
                  )}
            </div>
            <button className="newGoal-button" onClick={() => setGoalModalOpen(true)}>Make New Goal</button>
            {console.log(goals)}
            {goalModalOpen && <NewGoalModal closeNewGoalModal={()=>{setGoalModalOpen(false)}}/>} 
        </div>
    )
};*/

return (
    <div>
        <div className="goal-list-modal">
        {goals.map(((goal) => 
                 <div className="listed-goal">
                    <button onClick={flipVisibility}>
                    <li key={goal.name}>{goal.name}</li>
                    </button>
                    {visible && <InfoGoal goal={goal} closeInfoModal={()=>setInfoModal(false)}/>}
                </div>
        ))}
        </div>
        <button className="newGoal-button" onClick={() => setGoalModalOpen(true)}>Add New Quest</button>
        {console.log(goals)}
        {goalModalOpen && <NewGoalModal goals={goals} closeNewGoalModal={()=>{setGoalModalOpen(false)}}/>} 
    </div>
    )
};