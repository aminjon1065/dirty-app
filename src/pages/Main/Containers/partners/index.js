import React from 'react';
import Slider from 'react-slick'
import {Col, Container, Image} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reactImg from './../../../../assets/reactjs.svg'
import laravelImg from './../../../../assets/laravel.svg';
import bootstrapImg from './../../../../assets/bootstrap.svg';
import ilmhonaImg from './../../../../assets/ilmhona.png';
import chartheader from './../../../../assets/chart-header.svg';
import Google from './../../../../assets/Google.svg';
import microsoft from './../../../../assets/microsoft-5.svg';

const Partners = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <>
            <Container fluid className="border-bottom bg-light">
                <h3 className="subheader-font text-center pt-3">Это как бы партнёры</h3>
                <Container style={{height: "400px"}} className="d-flex align-items-center">
                    <Container>
                        <Slider {...settings}>
                            <Col>
                                <a href="https://reactjs.org">
                                    <Image src={reactImg} className="partnerImg"/>
                                </a>
                            </Col>
                            <Col>
                                <a href="https://laravel.com">
                                    <Image src={laravelImg} className="partnerImg"/>
                                </a>
                            </Col>
                            <Col>
                                <a href="https://getbootstrap.com">
                                    <Image src={bootstrapImg} className="partnerImg"/>
                                </a>
                            </Col>
                            <Col>
                                <a href="https://ilmhona.org">
                                    <Image src={ilmhonaImg} className="partnerImg"/>
                                </a>
                            </Col>
                            <Col>
                                <a href="https://react-charts.tanstack.com/">
                                    <Image src={chartheader} className="partnerImg"/>
                                </a>
                            </Col>
                            <Col>
                                <a href="https://goole.com">
                                    <Image src={Google} className="partnerImg"/>
                                </a>
                            </Col>
                            <Col>
                                <a href="https://microsoft.com">
                                    <Image src={microsoft} className="partnerImg"/>
                                </a>
                            </Col>
                        </Slider>
                    </Container>
                </Container>
            </Container>
        </>
    );
};

export default Partners;