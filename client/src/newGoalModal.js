import { useState } from "react";
import { Goal, goals, GoalClass} from "./goal.js"

export const NewGoalModal = ({closeNewGoalModal}) => {

    const [submittedGoal,setSubmittedGoal] = useState({
		name:"", description:"",complete:false});

	const [goalFilled, setGoalFilled] = useState(true);

	const submitGoal = () => {
        goals.push(new GoalClass(submittedGoal.name,submittedGoal.description,submittedGoal.complete));
        closeNewGoalModal();
    }

    return (
        <div className="Goal-Modal">
            <form>
				<div className="form-input">
					<label>Name:
						<br></br>
						<input className="input" name="name" defaultValue={submittedGoal.name}/>
					</label>
				</div>
                <div className="form-input">
					<label>description:
						<br></br>
						<input className="input" name="description" defaultValue={submittedGoal.description}/>
					</label>
				</div>
            </form>
            <button className="submit-button" onClick={submitGoal}></button>
        </div>
    );
};