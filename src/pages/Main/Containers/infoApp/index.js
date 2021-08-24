import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import banner from '../../../../assets/Banner.svg';

const InfoApp = () => {
    return (
        <>
            <Container fluid style={{height: "600px"}} className="border-bottom d-flex align-items-center bg-light">
                <Container>
                    <Row>
                        <Col>
                            <Image src={banner}/>
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="5" xl="5" xxl="5" className="align-self-center">
                            <h2 className="subheader-font">А тут обясняем как наше <span
                                className="text-laravel">Приложение</span> крутое :)</h2>
                            <p className="just-fonts">Обязательное маленькими шрифтами что-то ещё</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default InfoApp;