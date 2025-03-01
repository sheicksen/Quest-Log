import React, {useState} from 'react';
import { NewGoalModal } from './newGoalModal';

export class GoalClass{
    name
    description
    complete
    constructor(name, description, complete){
        this.name = name
        this.description = description
        this.complete = complete
    };
};

export const goals = [];

export const Goal = () => {

	//const [goals,setGoals] = useState(["","",false]);
    let [goalModalOpen, setGoalModalOpen] = useState(false);


	//function makeGoal(name,description){
       // goals.push(new GoalClass(name,description,false))
        //setGoals(goals)
    //}

    function markComplete(){
       //setGoals(goals.name,goals.description,true)
    }


    return (
        <div>
            <button className="newGoal-button" onClick={() => setGoalModalOpen(true)}>Make New Goal</button>
            {console.log(goals)}
            {goalModalOpen && <NewGoalModal closeNewGoalModal={()=>{setGoalModalOpen(false)}}/>} 
            {
                //<button onClick={markComplete}>Mark as complete</button>
            }  
        </div>
    )
};