import { use, useState } from "react";

export const InfoGoal = ({goal, closeInfoModal}) => {

    const [streaks,setStreaks] = useState(goal.streak);

    function markComplete(goal){
        setStreaks(streaks+1);
        goal.complete = true;
     }

    return (
        <div className="Goal-Modal-Container">
            <div className="goal-modal">
                <div>Name: {goal.name}</div>
                <div>Description: {goal.description}</div>
                <div>Streaks: {streaks}</div>
                <button onClick={()=> markComplete(goal)}>Mark as Complete</button>
            </div>
        </div>
    );
};