import React from 'react';
import DatatableUsers from "../../../components/users/table";
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../../../components/ui/sidebar";

const Users = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg="2" xl="2" xxl="2">
                        <Sidebar/>
                    </Col>
                    <Col className="pt-3">
                        <DatatableUsers/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Users;