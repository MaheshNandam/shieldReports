import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks } from './NavBarElements'

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);
    const isBrowser = typeof window !== "undefined";
    const menuItems = ['About us', 'Our Services', 'Scanners', 'Contact']

    const handleClick = () => setClick(!click)

    const changeNav = () => {
        if (isBrowser && isBrowser.scrollY >= 80) {
            setScroll(true)
        }
    }

    useEffect(() => {
        changeNav();
        window.addEventListener('scroll', changeNav);
    }, [])


    return (
        <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
            <Nav click={click} scroll={scroll}>
                <NavContainer>
                    <NavLogo to="/">
                        <NavIcon />
                        Venu Logs
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        {menuItems.map(item => <NavItem>
                            <NavLinks to='/'>{`${item}`}</NavLinks>
                        </NavItem>
                        )}
                    </NavMenu>
                </NavContainer>
            </Nav>
        </IconContext.Provider>
    );
};

export { NavBar }