import { use, useState } from "react";
import {removeGoal} from "./goal"

export const InfoGoal = ({goal, closeInfoModal, updateStreak}) => {

    const [streaks,setStreaks] = useState(goal.streak);

    function markComplete(goal){
        goal.streak += 1;
        setStreaks(goal.streak);
        updateStreak(goal.streak);
        goal.complete = true;
        removeGoal(goal)
     }

    return (
        <div className="Goal-Modal-Container">
            <div className="new-goal-modal">
                <div>Name: {goal.name}</div>
                <div>Description: {goal.description}</div>
                <div>Streaks: {streaks}</div>
                <button className="complete-button" onClick={()=> markComplete(goal)}>Mark {goal.name} Complete</button>
                <button className="change-date" onClick={()=>goal.date="Wed Aug 30 2025"}>Change Date for Demo Purposes</button>
            </div>
        </div>
    );
};