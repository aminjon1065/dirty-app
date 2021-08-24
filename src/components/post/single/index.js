import React, {useState} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import formatter from "../../../tools/date-formatter";

const ShowSinglePost = ({id, title, body, postImg, created_at, category, icon, user}) => {
    const [favorite, setFavorite] = useState(false);
    const myFavorite = () => {
        setFavorite(preFavorite => !preFavorite,
        )
    }
    let favText;
    if (favorite) {
        favText = 'text-warning';
    }
    return (
        <>
            <Container className="pt-5">
                <Row>
                    <Col>
                        <i onClick={myFavorite} className={`fas fa-star fs-4 float-start ${favText}`}></i>
                        <Image src={postImg} className="rounded"/>
                    </Col>
                    <Col>
                        <span>Posted by <strong className="bg-info p-2 rounded">{user}</strong> |</span>
                        <span className="ps-2 pe-2"><i className="fas fa-clock"></i> <strong
                            className="rounded">{formatter.format(Date.parse(created_at))}</strong> |</span>
                        <span>Category <strong className="bg-primary p-2 rounded">{category}</strong></span>
                        <hr/>
                        <Container>
                            <h2 className="subheader-font">{title}</h2>
                            <p className="just-fonts">{body}</p>
                        </Container>
                    </Col>
                </Row>

            </Container>
        </>
    )
        ;
};

export default ShowSinglePost;