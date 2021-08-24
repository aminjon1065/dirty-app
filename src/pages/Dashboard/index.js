import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../../components/ui/sidebar";
import MainDashboard from "./main";
import {useSelector} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";
import DatatableUsers from "../../components/users/table";
import AddUser from "./Users/addUser";
import AddPost from "./Posts/addPosts";
import MyProfile from "./Users/profile";
import Chat from "../../components/chat";

const Dashboard = () => {
    const selector = useSelector(state => state.auth);
    if (!selector.isLoggedIn) {
        return <Redirect to="/sign-in"/>
    }
    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg="2" xl="2" xxl="2">
                        <Sidebar/>
                    </Col>
                    <Col className="pt-3">
                        <Switch>
                            <Route path="/dirty-board" exact component={MainDashboard}/>
                            <Route path="/dirty-board/users-lists" component={DatatableUsers}/>
                            <Route path="/dirty-board/add-user" component={AddUser}/>
                            <Route path="/dirty-board/add-post" component={AddPost}/>
                            <Route path="/dirty-board/profile" component={MyProfile}/>
                            <Route path="/dirty-board/chat" component={Chat}/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;