import React, { Component, Fragment } from "react"
import styled from 'styled-components'
import { Link } from "react-router-dom"


export default class Navbar extends Component {

    state = {
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            this.setState({ scroll: window.scrollY })
        })
    }


    render() {
        const { scroll } = this.state
        return (
            <MainContainer scroll={scroll}>
                <LeftContainer>
                    <CustomLink to='/'>AB.</CustomLink>
                    <CustomLink to='/projects'>Projets</CustomLink>
                    <CustomLink to='/about'>A propos</CustomLink>
                    <CustomLink to='/contact'> Contact</CustomLink>
                </LeftContainer>
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
justify-content:space-between;
align-items: baseline;
`

const CustomLink = styled(Link)`
    margin: 0 1em;
    font-weight: bold;
`
