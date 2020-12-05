import React from 'react';
import MenuListComposition from "./loginMenu";
import NestedList from "./tasks"
import "./styles/taskForToday.scss"
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    useLocation
} from "react-router-dom";
//  <Link to="/">home</Link>



class TaskForToday extends React.Component {
    render() {
        return (
            <div className={"MAINBOX"}>
                <div className={"content"}>
                    <div className={"left"}>
                        <MenuListComposition />
                        <div className={"tasksForToday"}>
                            <NestedList />
                        </div>
                    </div>
                    <div className={"right"}>

                    </div>
                </div>
            </div>
        )
    }
}


export default TaskForToday