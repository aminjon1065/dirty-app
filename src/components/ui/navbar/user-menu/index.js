import React from 'react';
import avatar from '../../../../assets/avatar.svg';
import {NavDropdown} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import actions from "./../../../../states/actions/auth.action";
import {useDispatch} from "react-redux";

const UserInfo = ({closeNav}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const logoutUser = () => {
        dispatch(actions.logout());
        history.push('/');
    };
    return (
        <>
            <NavDropdown title={<>
                <div className="green_icon"></div><img src={avatar} width={34} alt="" className="rounded-pill shadow-sm"/></>}
                         id="user-nav-dropdown">
                <NavDropdown.Item as={Link} to="/dirty-board/profile" onClick={closeNav}><i
                    className="fas fa-user-circle"></i> Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/my-articles" onClick={closeNav}><i
                    className="fas fa-sticky-note"></i> Posts</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item as={Link} to="/sign-in" onClick={() => {
                    logoutUser()
                }}>
                    <i className="fas fa-sign-in-alt"></i> Log Out
                </NavDropdown.Item>
            </NavDropdown>
        </>
    );
};

export default UserInfo;