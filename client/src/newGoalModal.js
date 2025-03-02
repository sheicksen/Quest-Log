import { useState } from "react";
import { Goal, goals, GoalClass} from "./goal.js"
import './newGoalModal.css'
import { updateHist } from "./GeminAI.js";

export const NewGoalModal = ({closeNewGoalModal}) => {

    const [submittedGoal,setSubmittedGoal] = useState({
		name:"", description:"", repeatable: false, streak:0, complete:false});

	const [goalFilled, setGoalFilled] = useState(true);

    const onChangeHandler = (e) => {
		setSubmittedGoal({
			...submittedGoal,
			[e.target.name]:e. target.value,
		});
		setGoalFilled(true)
	}

	const submitGoal = () => {
        goals.push(new GoalClass(submittedGoal.name,submittedGoal.description,submittedGoal.repeatable, 0, false));
		let histupdate = "Updated list of goals:";
        for (const goal of goals){
			histupdate += "\nGoal name: "+goal.name + "\nGoal description: " + goal.description + "\nRepeatable?: "+ goal.repeatable;
		}
		updateHist(histupdate);
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
                <div className="form-input">
					<label>Repeatable:
						<br></br>
						<input type="radio" className="input" name="repeatable" id="True" value="Yes" defaultValue={submittedGoal.repeatable} onChange={(e)=>onChangeHandler(e)}/>
                        <label for="Yes">Yes</label>
                        <input type="radio" className="input" name="repeatable" id="False" value="False" defaultValue={submittedGoal.repeatable} onChange={(e)=>onChangeHandler(e)}/>
                        <label for="True">No</label>
					</label>
				</div>
            </form>
            <button className="submit-button" onClick={submitGoal}>Make Goal</button>
            </div>
        </div>
    );
};