import React, { Component } from "react"
import styled from 'styled-components'
import { Form, Button, Input } from './common'

export default class SigningForm extends Component {

    state = {
        //username: "Aline",
        //email: "alient4@hotmail.com"
    }


    handleChange = (event) => {
        // setState => attribut : valeur balise htmls: name = value
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
        const { username, email, password } = this.state
      
        return (
            <Form onSubmit={this.submitForm}>
                <Input name="username" value={username} invalid={!username} placeholder="Username" onChange={this.handleChange} />
                <Input name="email"  value={email} type="email" placeholder="email" onChange={this.handleChange} />
                <Input name="password" value={password} type="password" placeholder="password" />
                <Button>Soumettre </Button>
            </Form>
        )
    }
}

