import React from 'react';
import text404 from './../../assets/404/backToTheHomepage.webp'
import bg404 from './../../assets/404/Delorean.webp'
import {Container} from "react-bootstrap";
import './../../styles/404.css'
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <Container fluid className="page-404 bg-dark">
                <section className="notFound">
                    <div className="img">
                        <img src={text404} alt="Back to the Homepage"/>
                        <img src={bg404} alt="El Delorean, El Doc y Marti McFly"/>
                    </div>
                    <div className="text">
                        <h1>404</h1>
                        <h2>PAGE NOT FOUND</h2>
                        <h3>BACK TO HOME?</h3>
                        <Link to="/" className="yes">YES</Link>
                        <Link to="#">NO</Link>
                    </div>
                </section>
            </Container>
        </>
    );
};

export default NotFound;