import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import laravel from "../../../../assets/laravel.svg";
import react from "../../../../assets/reactjs.svg";
import bootstrap from "../../../../assets/bootstrap.svg";

const StackApp = () => {
    return (

        <Container fluid className="border-bottom p-5">
            <h2 className="subheader-font text-center">С чего собрано наше приложение</h2>
            <Container fluid className="d-flex align-items-center mt-4">
                <Row>
                    <Col xs="12" sm="12" md="12" lg="4" xl="4" xxl="4" className="d-flex justify-content-center">
                        <Container>
                            <Container className="d-flex justify-content-center mb-3">
                                <Image src={laravel} className="infoImg"/>
                            </Container>
                            <h3 className="text-center text-laravel">Laravel</h3>
                            <p className="text-center">Laravel is a web application framework with expressive,
                                elegant syntax. We’ve already
                                laid the foundation — freeing you to create without sweating the small things.</p>
                        </Container>
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="4" xl="4" xxl="4" className="d-flex justify-content-center">
                        <Container>
                            <Container className="d-flex justify-content-center mb-3">
                                <Image src={react} className="infoImg"/>
                            </Container>
                            <h3 className="text-center text-react">React</h3>
                            <p className="text-center">JavaScript-библиотека для создания пользовательских
                                интерфейсов</p>
                        </Container>
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="4" xl="4" xxl="4" className="d-flex justify-content-center">
                        <Container>
                            <Container className="d-flex justify-content-center">
                                <Image src={bootstrap} className="infoImg"/>
                            </Container>
                            <h3 className="text-center text-bootstrap mt-lg-5">Bootstrap</h3>
                            <p className="text-center">Quickly design and customize responsive mobile-first
                                sites with Bootstrap, the world’s most popular front-end open source toolkit,
                                featuring Sass variables and mixins, responsive grid system, extensive prebuilt
                                components, and powerful JavaScript plugins.</p>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default StackApp;