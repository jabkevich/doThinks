import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    useLocation
} from "react-router-dom";

import Authoriztion from "./components/authorization/authoriztion";
import TaskForToday from "./components/TasksForToday/taskForToday";
export default function NoMatchExample() {
    return (
        <Router>
                <Switch>
                    <Route exact path="/">
                        <Authoriztion />
                    </Route>
                    <Route path="/TaskForToday">
                        <TaskForToday />
                    </Route>
                </Switch>
        </Router>
    );
}
// <ul>
//     <li>
//         <Link to="/old-match">Old Match, to be redirected</Link>
//     </li>
//     <li>
//         <Link to="/will-match">Will Match</Link>
//     </li>
//     <li>
//         <Link to="/will-not-match">Will Not Match</Link>
//     </li>
//     <li>
//         <Link to="/also/will/not/match">Also Will Not Match</Link>
//     </li>
// </ul>

