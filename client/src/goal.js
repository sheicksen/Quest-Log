import React, {useState} from 'react';
import { NewGoalModal } from './newGoalModal';
import { InfoGoal } from './InfoGoal.js'
export class GoalClass{
    /** This class represents a goal
     * attributes: 
     * name: name for the task that will be displayed
     * description: notes/description of the task that will display when the task it clicked on
     * repeatable: whether or not a task is a repeating task or only needs to be done once
     * streak: how many times the task has been completed
     * complete: whether or not the task is complete
     * visible: whether or not just name should be visible or if description, streak, and complete button should display
     */
    name
    description
    repeatable
    streak
    complete
    visible
    date
    lastSubmit
    constructor(name, description, repeatable){
        this.name = name
        this.description = description
        this.repeatable = repeatable
        this.streak = 0
        this.complete = false
        this.visible = false
        this.date = new Date().toDateString();
        this.lastSubmit = new Date().toISOString();
    };
};

export let goals = [];
export let completeNonrepeat = [];
let demoGoal = new GoalClass("Old task", "This task hasn't been worked on in a while", true);
demoGoal.streak = 5;
demoGoal.date = new Date("01/02/2025").toDateString();
demoGoal.lastSubmit = new Date("01/02/2025").toISOString();
goals.push(demoGoal);
export function removeGoal(goal){
    /** This function removes a non-repeatable
     * 
     */
    if(goal.repeatable==="False"){
        let nonRepeat = goals.filter((current)=> current===goal)
        completeNonrepeat.push(nonRepeat);
        const filteredGoals = goals.filter((current)=> current!=goal)
        goals = [...filteredGoals];
        console.log(completeNonrepeat);
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
                 <div>
                    <button className="listed-goal" onClick={(e) => {handleFocus(e, goal)}}>
                    <li className="listed-goal" key={goal.name}>{goal.name}</li>
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