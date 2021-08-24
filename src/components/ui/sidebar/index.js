import React from 'react';
import {Container, ListGroup, Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../../../styles/sidebar.css'

const Sidebar = () => {
    return (
        <>
            <Container fluid className="flex-shrink-0 p-3 bg-white hr vh-100 position-fixed d-none d-xl-block shadow-sm"
                       style={{width: "280px"}}>
                <ListGroup className="navbar-nav">
                    <ListGroup.Item className="nav-item">
                        <Link to="/" className="nav-link">
                            <span>
                                <i className="fas fa-home"></i> Home
                            </span>
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item className="nav-item">
                        <Link to="/dirty-board" className="nav-link">
                            <span><i className="fas fa-chalkboard"></i> Dirty-Board
                            </span>
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item className="nav-item">
                        <Link to="/dirty-board/add-post" className="nav-link">
                            <span><i className="fas fa-plus"></i> Add Post</span>
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item className="nav-item">
                        <Link to="/dirty-board/chat" className="nav-link">
                            <span><i className="fas fa-comments"></i> Chat
                            </span>
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                                <i className="fas fa-users"></i> Users
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/dirty-board/users-lists">
                                        <span>
                                            <i className="fas fa-users"></i> Users
                                        </span>
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/dirty-board/add-user">
                                    <span><i className="fas fa-user-plus"></i> Add User</span>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        </>
    );
};

export default Sidebar;