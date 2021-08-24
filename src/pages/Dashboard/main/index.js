import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CategoriesCards from "./categories";
import ChartsDashboard from "./charts";
import IsOnline from "../Users/isOnline";

const MainDashboard = () => {
    return (
        <>
            <Container fluid className="pt-3">
                <Row>
                    <CategoriesCards/>
                </Row>
                <Container fluid>
                    <ChartsDashboard/>
                </Container>
                <Container fluid className="pt-3">
                    <Row>
                        <Col className=" text-center">
                            <h4>Users <span className="text-success pb-3">Online</span></h4>
                            <IsOnline/>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default MainDashboard;