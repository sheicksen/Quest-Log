import { useState } from "react";
import { Goal, GoalClass} from "./goal.js"
import { goals } from "./goal.js"
import './newGoalModal.css'
import { updateHist } from "./GeminAI.js";

export const NewGoalModal = ({goals, flipButtonVisibility, closeNewGoalModal}) => {

    const [submittedGoal,setSubmittedGoal] = useState({
		name:"", description:"", repeatable: false, streak:0, complete:false, visible:false});

	const [goalFilled, setGoalFilled] = useState(true);

    const onChangeHandler = (e) => {
		setSubmittedGoal({
			...submittedGoal,
			[e.target.name]:e. target.value,
		});
		setGoalFilled(true)
	}

	const submitGoal = () => {
		const today = new Date().toDateString;
        goals.push(new GoalClass(submittedGoal.name,submittedGoal.description,submittedGoal.repeatable, 0, false, false, today, new Date().toISOString()));
		let histupdate = "Updated list of goals:";
        for (const goal of goals){
			histupdate += "\nGoal name: "+goal.name + "\nGoal description: " + goal.description + "\nRepeatable?: "+ goal.repeatable;
		}
		updateHist(histupdate);
        flipButtonVisibility();
		closeNewGoalModal();
		
    }

    return (
        <div className="Goal-Modal-Container">
            <div className="goal-modal">
            <form>
				<div class="body-font">
					<label>Name:
						<br></br>
						<input className="input" name="name" defaultValue={submittedGoal.name } onChange={(e)=>onChangeHandler(e)}/>
					</label>
				</div>
                <div class="body-font">
					<label>Description:
						<br></br>
						<input className="input" name="description" defaultValue={submittedGoal.description} onChange={(e)=>onChangeHandler(e)}/>
					</label>
				</div>
                <div class="body-font">
					<label>Repeatable:
						<br></br>
                        <label for="True">
                            <input type="radio" className="input" name="repeatable" id="True" value="Yes" defaultValue={submittedGoal.repeatable} onChange={(e)=>onChangeHandler(e)}/>  
                            Yes, This Quest Will Repeat</label>
                        <label for="False">
                            <input type="radio" className="input" name="repeatable" id="False" value="False" defaultValue={submittedGoal.repeatable} onChange={(e)=>onChangeHandler(e)}/>
                            No, This Quest Will Only Be Done Once</label>
					</label>
				</div>
            </form>
            <button className="submit-button" onClick={submitGoal}>Make Quest</button>
            </div>
        </div>
    );
};