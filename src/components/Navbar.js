import React, { Component, Fragment } from "react"
import styled from 'styled-components'
import { Link } from "react-router-dom"
import {  Modal } from "../components";



export default class Navbar extends Component {

    state = {
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            this.setState({ scroll: window.scrollY })
        })
    }

    toggleModal = () => this.setState({
        display_modal: !this.state.display_modal
    })



    render() {
        const { scroll, display_modal } = this.state
        return (
            <MainContainer scroll={scroll}>
                <LeftContainer>
                    <CustomLink to='/'>AB.</CustomLink>
                    <CustomLink to='/projects'>Projets</CustomLink>
                    <CustomLink to='/about'>A propos</CustomLink>
                    <CustomLink to='/contact'> Contact</CustomLink>
                </LeftContainer>
                <RightContainer>
                    <NavBarItem onClick={this.toggleModal}> Connexion </NavBarItem>

                    <Modal><p>toto</p></Modal>
                    
                </RightContainer>
            </MainContainer>
        )
    }
}

const MainContainer = styled.div`
   padding: 0.5em;
   display: flex;
    width: 100%;
    background-color: ${props => props.scroll ? "white" : ""};
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`

const LeftContainer = styled.div`

`
const CenterContainer = styled.div`

marging: 1em;
text-align: left;
background-color: red;
align-items: baseline;
`

const RightContainer = styled.div`
background-color: ${props => props.backgroundRight ? "white" : ""};

padding: 0.5em;
padding-right: 2em;
justify-content:space-between;
align-items: baseline;
`

const CustomLink = styled(Link) `
    margin: 0 1em;
    font-weight: bold;
`
const NavBarItem = styled.div``
