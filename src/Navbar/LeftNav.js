import React from 'react';
import styled from 'styled-components';
import {Nav} from 'react-bootstrap';
import Email from './../images/email.png';

const NavBar = styled(Nav)`
    background-color: #2E4050;
`
const NavLink = styled.div`
    padding: 20px 0px;
    width: 100%;
    text-align: center;
    &:hover{
        background-color: #243846;
        border-left: 4px solid #008E74;
    }

    &.active{
        background-color: #243846;
        border-left: 4px solid #008E74;
    }
`
const NavBanner = styled.div`
    background-color: #243846;
    color: $white;
    padding 10px;
    width:100%;
    text-align: center;
`

export default function LeftNav() {
    return (
        <NavBar className="flex-column h-100 align-items-center">
            <NavBanner className="text-white">
                <h1>IN+</h1>
            </NavBanner>
            <NavLink>
                <img src={Email} alt="Message Icon" height="30" width="30"/>
            </NavLink>
            <NavLink>
                <img src={Email} alt="Message Icon" height="30" width="30"/>
            </NavLink>
            <NavLink >
                <img src={Email} alt="Message Icon" height="30" width="30"/>
            </NavLink>
            <NavLink className="active">
                <img src={Email} alt="Message Icon" height="30" width="30"/>
            </NavLink>
            <NavLink>
                <img src={Email} alt="Message Icon" height="30" width="30"/>
            </NavLink>
            <NavLink>
                <img src={Email} alt="Message Icon" height="30" width="30"/>
            </NavLink>
            <NavLink>
                <img src={Email} alt="Message Icon" height="30" width="30"/>
            </NavLink>
        </NavBar>
    )
}