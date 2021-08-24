import React, {useEffect, useState} from 'react';
import PostsService from './../../services/Posts/posts.service'
import {Container} from "react-bootstrap";
import Post from "../../components/post";
import Pagination from 'react-js-pagination';
import Loading from "../../components/ui/loading";
import SearchPosts from "../../components/post/search";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true)
    const fetchPages = (pageNumber) => {
        PostsService.fetchPostsFormMain(pageNumber).then((response) => {
            setPosts(response.data)
            setLoading(false)
        })
    }
    useEffect(() => {
        fetchPages()
    }, [])

    const {data, current_page, per_page, total} = posts
    return (
        <>
            <Container className="pt-3">
                <SearchPosts />
                {
                    loading
                        ?
                        <Loading/>
                        :
                        <>
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
                        </>
                }
            </Container>
        </>
    );
};

export default Posts;