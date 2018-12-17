import React, { Component, Fragment } from "react"
import styled from 'styled-components'
import { Link } from "react-router-dom"


export default class Navbar extends Component {

    render() {
        return (
            <Fragment>
                <MainContainer>
                    <LeftContainer> <Link to='/'>Accueil</Link></LeftContainer>
                    <RightContainer><Link to='/contact'> Contact</Link></RightContainer>
                </MainContainer>
            </Fragment>
        )
    }
}

const MainContainer = styled.div`
   padding: 10px;
    display: flex;
border-bottom: 1px solid #dedede;
   justify-content:space-between;
`

const LeftContainer = styled.div`
`

const RightContainer = styled.div`
`

