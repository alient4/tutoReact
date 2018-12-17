import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { SigningForm } from "../components"


export default class Landing extends Component {

    render() {
        return (

            <SigningForm>
                <h1>Signing Form</h1>

            </SigningForm>
          
        )

    }
}