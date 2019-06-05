import React from "react";
import { Auth } from 'aws-amplify';
import { Button } from 'reactstrap';
import { SignOut } from 'aws-amplify-react';
import './Logout.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class Logout extends React.Component{
    constructor(props){
        super(props);
        this.signOut = this.signOut.bind(this);
    }

    signOut() {
        Auth.signOut();
    }

    render(){
        return(
            <Router>
            <p1>{`Hello, ${this.props.isOpen}`}</p1>
            <button onClick = {this.stopPropagation, this.signOut}>Signout</button>
            </Router>
        );
    }
}
