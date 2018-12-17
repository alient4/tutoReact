import React, { Component } from "react"
import styled from 'styled-components'

export default class SigningForm extends Component {

    state = {
        username: "Aline",
        email: "alient4@hotmail.com"
    }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }) // crée un attribut username dans le state et lui affecte le texte saisi

    }

    submitForm = (event) => {
        event.preventDefault()
        const { username, email } = this.state
        if (this.props.onFormSubmit){
            this.props.onFormSubmit(this.state)
        }
        this.setState({ [event.target.name]: event.target.value }) // crée un attribut username dans le state et lui affecte le texte saisi

    }


    render() {
        const username = this.state.username
        return (
            <Form>
                <Input value="username" invalid={!username} placeholder="Username" onChange={this.handleChange} />
                <Input value="email" type="email" placeholder="email" onChange={this.handleChange} />
                <Button value="button" type="submit" onClick={this.submitForm} />
            </Form>

        )

    }
}

const Form = styled.form`
   background-color: grey;
   `
const Input = styled.input`
padding: 0.5em;
border-radius: 0.2em;
border-style: solid;
top: 200px;
border: 1 px solid ${props => props.invalid ? "red" : "black"};

`

const Button = styled.button`
background-color: white;
border: 1 px solid;
border-color: grey;
width: 5em;
height: 2em;
color: black;


`