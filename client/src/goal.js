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

export const goals = [new GoalClass("","",false)];

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
            <button onClick={() => setGoalModalOpen(true)}>Make a new goal</button>
            {console.log(goals[1])}
            {goalModalOpen && <NewGoalModal closeNewGoalModal={()=>{setGoalModalOpen(false)}}/>} 
            {
                //<button onClick={markComplete}>Mark as complete</button>
            }  
        </div>
    )
};