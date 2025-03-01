import { useState } from "react";
import { Goal, goals, GoalClass} from "./goal.js"
import './newGoalModal.css'

export const NewGoalModal = ({closeNewGoalModal}) => {

    const [submittedGoal,setSubmittedGoal] = useState({
		name:"", description:"",complete:false});

	const [goalFilled, setGoalFilled] = useState(true);

    const onChangeHandler = (e) => {
		setSubmittedGoal({
			...submittedGoal,
			[e.target.name]:e. target.value,
		});
		setGoalFilled(true)
	}

	const submitGoal = () => {
        goals.push(new GoalClass(submittedGoal.name,submittedGoal.description,submittedGoal.complete));
        closeNewGoalModal();
    }

    return (
        <div className="Goal-Modal-Container">
            <div className="goal-modal">
            <form>
				<div className="form-input">
					<label>Name:
						<br></br>
						<input className="input" name="name" defaultValue={submittedGoal.name } onChange={(e)=>onChangeHandler(e)}/>
					</label>
				</div>
                <div className="form-input">
					<label>Description:
						<br></br>
						<input className="input" name="description" defaultValue={submittedGoal.description} onChange={(e)=>onChangeHandler(e)}/>
					</label>
				</div>
            </form>
            <button className="submit-button" onClick={submitGoal}>Make Goal</button>
            </div>
        </div>
    );
};