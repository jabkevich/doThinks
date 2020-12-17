import React from 'react';
import "./styles/taskAnimate.scss"

class TaskAnimate extends React.Component {

    render() {
        return (
            <div id="Animation" >
                <div id={"Task"} className={"hidden"}>
                   <div>Animation</div>
                    <ul className="border">
                        <li>Сделать анимацию</li>
                        <li>Сдать анимацию</li>
                    </ul>
                    <input id={"NewTask"}/>
                    <button id={"Button"}>Добаавить</button>
                </div>
            </div>
        )
    }
}



export default TaskAnimate