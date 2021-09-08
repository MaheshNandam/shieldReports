import { Link } from 'gatsby'
import styled from "styled-components";
import { DiScala } from 'react-icons/Di'

export const Main = styled.main`
    padding: 0px;
`

export const Nav = styled.nav`
    background: ${(active) => active ? '#fff' : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%)'};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;

    @media screen and (max-width: 960px){
        background: ${({ click }) => click ? "#fff" : "transparent"};
        transition: 0.8 all ease;
    }
`

export const NavContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    max-width: 1000px;
`

export const NavLogo = styled(Link)`
    color: #141414;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
`

export const NavIcon = styled(DiScala)`
    margin: 0 0.5rem 0 2rem
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        z-index: 1000;
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        padding: 0px;
        margin: 0px;
        width: 100%;
        height: 40vh;
        position: absolute;
        top: ${({ click }) => (click ? "100%" : "-1000px")};
        opacity: 1;
        transition: all 0.2s ease;
        background: #fff;
    }
`

export const NavItem = styled.li`
    height: 40px;

    @media screen and (max-width: 960px){
        width: 100%;
    }
`

export const NavLinks = styled(Link)`
    display: flex;
    color: #141414;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    @media screen and (max-width: 960px){
        text-align:center;
        padding: 50px auto;
        margin: 10px 0px;
        width: 95.5%;
        height: 1rem;
        display: flex;
        color: #141414;

        &::hover{
            color: #ff4040;
            transition: all 0.2s ease;
        }
    }
`

