import React, {useState} from 'react';
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap";
import {Link, useLocation, useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import logo from '../../../assets/logo.svg';
import AuthService from './../../../services/AuthService';
import UserInfo from "./user-menu";
import actions from "../../../states/actions/auth.action";
import actionsOnline from "../../../states/actions/online.action";

const NavMenu = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory()
    const token = localStorage.getItem('token');
    const [navExpanded, setNavExpanded] = useState(false);
    const setExpanded = (expanded) => {
        setNavExpanded(expanded);
    };
    const closeNav = () => {
        setNavExpanded(false);
    };
    const logoutUser = () => {
        AuthService.logout(token)
        dispatch(actions.logout())
        dispatch(actionsOnline.offline())
        history.push('/');
    };
    const selector = useSelector(state => state.auth);
    const loginNavbar =
        selector.isLoggedIn
            ?
            (<Nav>
                <UserInfo closeNav={closeNav}/>
                <Nav.Link onClick={() => {
                    closeNav();
                    logoutUser()
                }} as={Link} to='/'>
                    <i className="fas fa-sign-in-alt"></i> Log Out
                </Nav.Link>
            </Nav>)
            :
            (<Nav>
                <Nav.Link onClick={closeNav} as={Link} to="/sign-in">
                    <i className="fas fa-sign-in-alt"></i> Sign In
                </Nav.Link>
                <Nav.Link onClick={closeNav} as={Link} to="/sign-up">
                    <i className="fas fa-user-plus"></i> Sign Up
                </Nav.Link>
            </Nav>)
    const menu = location.pathname === '/sign-in'
        ? null
        : location.pathname === '/sign-up'
            ? null
            : location.pathname === !location.pathname
                ? null
                : <Navbar
                    onToggle={setExpanded}
                    expanded={navExpanded}
                    className="shadow-sm text-secondary border-bottom"
                    bg="white"
                    variant="light"
                    sticky="top"
                    expand="lg"
                >
                    <Container className="menu-fonts">
                        <Navbar.Brand>
                            <Link
                                onClick={closeNav}
                                to="/"
                                className="navbar-brand my-auto font-monospace fw-bold"
                            >
                                <img
                                    width="50"
                                    height="30"
                                    src={logo}
                                    alt="Logo"
                                />
                                App
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle
                            onClick={() => setNavExpanded(navExpanded ? false : "expanded")}
                            aria-controls="basic-navbar-nav"
                        />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav
                                activeKey={location.pathname}
                                className="me-auto fw-normal"
                            >
                                <Nav.Link
                                    eventKey={"/"}
                                    as={Link}
                                    onClick={closeNav}
                                    to="/"
                                >
                                    <i className="fas fa-home"></i> Home
                                </Nav.Link>
                                <Nav.Link
                                    eventKey={"/dirty-board"}
                                    as={Link}
                                    onClick={closeNav}
                                    to="/dirty-board"
                                >
                                    <i className="fas fa-skull-crossbones"></i> DirtyBoard
                                </Nav.Link>
                                <Nav.Link
                                    eventKey={"/articles"}
                                    as={Link}
                                    onClick={closeNav}
                                    to="/articles"
                                >
                                    <i className="fas fa-newspaper"></i> Posts
                                </Nav.Link>
                            </Nav>
                            {loginNavbar}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
    return (
        <>
            {menu}
        </>
    );
};

export default NavMenu;