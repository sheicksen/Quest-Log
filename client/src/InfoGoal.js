import { useState } from "react";

export const InfoGoal = ({goal, closeInfoModal}) => {

    return (
        <div className="Goal-Modal-Container">
            <div className="goal-modal">
                <div>Name: {goal.name}</div>
                <div>Description: {goal.description}</div>
                <div>Streaks: {goal.streaks}</div>
                <button onClick={()=> goal.complete = true}>Mark as Complete</button>
            </div>
        </div>
    );
};