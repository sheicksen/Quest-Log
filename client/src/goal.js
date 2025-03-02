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

export let goals = [];

export function removeGoal(goal){
    if(goal.repeatable==="False"){
        const filteredGoals = goals.filter((current)=> current!=goal)
        goals = [...filteredGoals];
    }
}

export const Goal = ({onFocus, onStreakUpdate}) => {
    
    let [buttonOpen, setButtonOpen] = useState(true);

   let [goalModalOpen, setGoalModalOpen] = useState(false);

   let [InfoModalOpen, setInfoModal] = useState(false);

   let [visible, setVisible] = useState(false);

   function flipVisibility() {
        setVisible(!visible);
   }

   function flipButtonVisibility(){
    setButtonOpen(!buttonOpen);
   }

   function addingQuest(){
    setGoalModalOpen(true);
    flipButtonVisibility();
   }

    function handleFocus(e, goal){
        flipVisibility();
        onFocus(goal);
    }

return (
    <div>
        <div className="goal-list-modal">
        {goals.map(((goal) => 
                 <div className="listed-goal">
                    <button onClick={(e) => {handleFocus(e, goal)}}>
                    <li key={goal.name}>{goal.name}</li>
                    </button>
                    {visible && <InfoGoal updateStreak={onStreakUpdate} goal={goal} closeInfoModal={()=>setInfoModal(false)}/>}
                </div>
        ))}
        </div>
        <div className='add-goal'>
            {buttonOpen && <button className="newGoal-button" onClick={() => addingQuest()}>Add New Quest</button>}
            {console.log(goals)}
            {goalModalOpen && <NewGoalModal goals={goals} flipButtonVisibility={()=>(flipButtonVisibility())} closeNewGoalModal={()=>{setGoalModalOpen(false)}}/>} 
        </div>
    </div>
        
    )
};