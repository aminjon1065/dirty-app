import React from 'react';
import {Container, Image} from "react-bootstrap";
import './../../styles/post.scss'
import formatter from "../../tools/date-formatter";
import {Link} from "react-router-dom";

const Post = ({id, title, body, postImg, created_at, category, icon, user}) => {
    return (
        <>
            <Container fluid className="post-single">
                <article className="postcard dark blue">
                    <Link className="postcard__img_link" to={`/article/${id}`}>
                        <Image className="postcard__img" src={postImg} alt="Image Title"/>
                    </Link>
                    <div className="postcard__text">
                        <h1 className="postcard__title blue"><Link to={`/article/${id}`}>{title}</Link></h1>
                        <div className="postcard__subtitle small">
                            <time dateTime="2020-05-25 12:00:00">
                                <i className="fas fa-calendar-alt mr-2"></i>
                                {formatter.format(Date.parse(created_at))}
                            </time>
                        </div>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">
                            {body}
                        </div>
                        <ul className="postcard__tagbox">
                            <li className="tag__item"><i className={icon}></i> {category}</li>
                            <li className="tag__item"><i className="far fa-user"></i> {user}</li>
                        </ul>
                    </div>
                </article>
            </Container>
        </>
    );
};

export default Post;