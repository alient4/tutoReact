import React, { Component } from "react"
import styled from 'styled-components'
import { Form, Button, Input } from '../components/common'
import { Fragment } from "react"
import { SignupForm } from "../components"
import { Link } from "react-router-dom"


export default class Signup extends Component {
    state = {}
    handleConnection = (data) => {
        this.setState({
            logged: true,
            username: data.username,
            email: data.email,
            password: data.password,
            passwordconfirm: data.passwordconfirm
            
        })
     
    }


    render() {
        const { username, email, logged, password, passwordconfirm } = this.state
        return (
            <Fragment>

                <h1>SIGNUP PAGE</h1>

                {logged ?
                    <Fragment>
                        <p><Link to='/'> <Button>GoToLanding</Button></Link></p>
                        <p> Utilisateur connecté : {username}, son mail est {email}</p>
                    </Fragment>
                    :
                    <SignupForm onFormSubmit={this.handleConnection} />
                }
            </Fragment>



        )

    }
}