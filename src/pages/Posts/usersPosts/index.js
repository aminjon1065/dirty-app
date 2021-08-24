import React, {useEffect, useState} from 'react';
import UsersArticlesService from './../../../services/Posts/users-articles.service';
import Loading from "../../../components/ui/loading";
import Post from "../../../components/post";
import Pagination from "react-js-pagination";
import PostsService from "../../../services/Posts/posts.service";
import {Container} from "react-bootstrap";

const UsersPosts = () => {
    const token = localStorage.getItem('token')
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = () => {
            UsersArticlesService.userPosts(token).then((response) => {
                setPosts(response.data)
                setLoading(false)
            })
        }
        fetchPosts()
    }, [token])
    const fetchPages = (pageNumber) => {
        PostsService.fetchPostsFormMain(pageNumber).then((response) => {
            setPosts(response.data)
            setLoading(false)
        })
    }
    const {data, current_page, per_page, total} = posts

    return (
        <>
            {
                loading
                    ?
                    <Loading/>
                    :
                    <>
                        <Container className="pt-3">
                            {
                                data.map((post, index) => {
                                    return (
                                        <Post
                                            key={index}
                                            id={post.id}
                                            title={post.title}
                                            body={post.body}
                                            postImg={post.img}
                                            created_at={post.created_at}
                                            category={post.category.category}
                                            icon={post.category.icon}
                                            user={post.user.name}
                                        />
                                    )
                                })
                            }
                            <Pagination
                                activePage={current_page}
                                itemsCountPerPage={per_page}
                                onChange={(pageNumber) => fetchPages(pageNumber)}
                                totalItemsCount={total}
                                itemClass="page-item"
                                linkClass="page-link"
                                firstPageText="First"
                                lastPageText="Last"
                            />
                        </Container>

                    </>
            }

        </>
    );
};

export default UsersPosts;