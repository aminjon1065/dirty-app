import React from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import flower from "../../../../assets/flower.svg";

const HeaderContainer = () => {
    return (
        <>
            <Container fluid className=" pt-4 border-bottom">
                <Container style={{height: "600px"}} className="d-flex align-items-center">
                    <Row>
                        <Col xs="12" sm="12" md="12" lg="5" xl="5" xxl="5" className="d-block align-self-center">
                            <Container className="text-start mb-5">
                                <h1 className="header-font">Крутое <span className="text-react">слово</span>, ещё <span
                                    className="text-bootstrap">одна</span>, ну и давай ещу <p
                                    className="text-laravel">одну</p></h1>
                            </Container>
                            <Container className="d-flex">
                                <a
                                    href="https://laravel.com"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <Button
                                        size="lg"
                                        className="laravel-button me-2"
                                        variant="react"
                                    >
                                        Laravel
                                    </Button>
                                </a>
                                <a
                                    href="https://reactjs.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        size="lg"
                                        className="react-button me-2"
                                    >
                                        React
                                    </Button>
                                </a>
                                <a
                                    href="https://getbootstrap.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        size="lg"
                                        className="bootstrap-button me-2"
                                    >
                                        Bootstrap
                                    </Button>
                                </a>
                            </Container>
                        </Col>
                        <Col>
                            <Container className="overflow-hidden">
                                <Image src={flower} fluid className="d-none d-lg-block banner"/>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default HeaderContainer;