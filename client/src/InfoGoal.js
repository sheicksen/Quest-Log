import { useState } from "react";

export const InfoGoal = ({goal, closeInfoModal}) => {

    const [submittedGoal,setSubmittedGoal] = useState({
		name:goal.name, description:goal.description, repeatable: goal.repeatable, streak:goal.streak, complete:goal.complete, visible:goal.visible});

	const [goalFilled, setGoalFilled] = useState(true);

    const onChangeHandler = (e) => {
		setSubmittedGoal({
			...submittedGoal,
			[e.target.name]:e. target.value,
		});
		setGoalFilled(true)
	}

    return (
        <div className="Goal-Modal-Container">
            <div className="goal-modal">
                <div>Name: {goal.name}</div>
                <div>Description: {goal.description}</div>
                <div>Streak: {goal.streak}</div>
                <div>Complete: {goal.complete}</div>
            <button className="close-button" onClick={closeInfoModal()}>Close Information</button>
            </div>
        </div>
    );
};