import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, Redirect, useLocation} from "react-router-dom";
import "./styles/authoriztion.js.scss"
import Button from '@material-ui/core/Button';

//<Link to="/TaskForToday">TaskForToday</Link>

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="form">
            <input type="text" name="text" autoComplete="off" required/>
            <label htmlFor="text" className="label-name">
                                <span className="content-name">
                                  Repeat password
                                </span>
            </label>
        </div>
    );
}

class Authoriztion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div className={"MAINBOX"}>
                <div className={"Content"}>
                    <div className={"NameLogo"}><h1>doThinks</h1></div>
                    <form   className="container">
                        <div className="form">
                            <input type="text" name="text" autoComplete="off" required/>
                            <label htmlFor="text" className="label-name">
                                <span className="content-name">
                                  Your username
                                </span>
                            </label>
                        </div>
                        <div className="form">
                            <input type="text" name="text" autoComplete="off" required/>
                            <label htmlFor="text" className="label-name">
                                <span className="content-name">
                                  Your password
                                </span>
                            </label>
                        </div>
                        <WarningBanner warn={this.state.showWarning} />
                        <div className={"haveAnAccount"}>
                            <Button type="submit" variant="contained" color="primary"><Link to="/TaskForToday">Login</Link></Button>
                            <Button onClick={this.handleToggleClick} variant="contained" color="secondary">
                                {this.state.showWarning ? 'Уже есть аккаунт?' : 'Создайть аккаунт'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


export default Authoriztion