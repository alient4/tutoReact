import React, { Component, Fragment } from "react"
import styled from 'styled-components'
import { Link } from "react-router-dom"


export default class Navbar extends Component {

    render() {
        return (
            <fragment>
                <MainContener><h1>Navbar</h1>
                    <LeftContener> <Link to='/'>Accueil</Link></LeftContener>
                    <RightContener><Link to='/contact'> Contact/></Link></RightContener>
                </MainContener>
            </fragment>
        )
    }
}

const MainContener = styled.div`
   background-color: red;
   color: #FFF;
   padding: 10px;
   justify-content:space-between`

const LeftContener = styled.div`
    left: 10px;
    position : absolute;
    background-color : orange;
`

const RightContener = styled.div`

    right: 10px;
    position: absolute;
    background-color : blue`

