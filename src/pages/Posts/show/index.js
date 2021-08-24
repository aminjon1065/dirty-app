import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import PostsService from './../../../services/Posts/posts.service';
import Loading from "../../../components/ui/loading";
import {Container} from "react-bootstrap";
import ShowSinglePost from "../../../components/post/single";

const ShowPost = () => {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true)
    const params = useParams()
    useEffect(() => {
        PostsService.showPost(params.id).then((response) => {
            setPost(response.data)
            setLoading(false)
        })
    }, [params])
    return (
        <>
            {
                loading
                    ?
                    <Loading/>
                    :
                    <Container>
                        <ShowSinglePost
                            id={post.id}
                            category={post.category.category}
                            title={post.title}
                            body={post.body}
                            user={post.user.name}
                            created_at={post.created_at}
                            icon={post.icon}
                            postImg={post.img}
                        />
                    </Container>
            }
        </>
    );
};

export default ShowPost;