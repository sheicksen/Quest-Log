import "./task.css";
import {useState} from 'react';

function Task(){
    const [tasks, setTasks] = useState([{name:"Start Question", description: "You don't have any tasks yet.", streak:0, repeatable: false, completed:false, broken:false}]);
    return (
        <div>
            
        </div>
    );
}