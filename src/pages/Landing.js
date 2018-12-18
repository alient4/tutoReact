import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { SigningForm } from "../components"


export default class Landing extends Component {
    state = {}
    handleConnection = (data) => {
        this.setState({
            logged: true,
            username: data.username,
            email: data.email
        })
    }


    render() {
        const { username, email, logged } = this.state
        return (
            <Fragment>
                <h1>LANDING PAGE</h1>
                {logged ?
                    <p> Utilisateur connecté : {username}, son mail est {email}</p>
                    :
                    <SigningForm onFormSubmit={this.handleConnection} />
                }
            </Fragment>
          
        )

    }
}