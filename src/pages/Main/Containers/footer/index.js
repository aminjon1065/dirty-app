import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import footer from './../../../../assets/footer.svg';

const Footer = () => {
    return (
        <>
            <Container fluid className="bg-dark text-light">
                <Container className="pt-3">
                    <Row>
                        <Col>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae dolores illum placeat,
                            tempore voluptatem!
                        </Col>
                        <Col>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta earum incidunt officia quae
                            quam
                            voluptas.
                        </Col>
                        <Col>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nam, quae rerum sapiente soluta
                            voluptatem!
                        </Col>
                        <Col>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolorem nam
                            perspiciatis
                            sequi sit suscipit.
                        </Col>
                        <Col>
                            <p><a className="link-light" href="tel:9929110000770"><i className="fas fa-phone"></i> Наш
                                Номер</a></p>
                            <p><a className="link-light" href="mailto:admin@service.com"><i
                                className="fas fa-envelope-square"></i> Наш
                                Email</a></p>
                            <p><a className="link-light" href="https://instagram.com"><i
                                className="fab fa-instagram"></i> Наш Instagram</a>
                            </p>
                        </Col>
                    </Row>
                    <Container className="d-flex justify-content-center">
                        <Image src={footer} className="footer-img"/>
                    </Container>
                </Container>
            </Container>
        </>
    );
};

export default Footer;