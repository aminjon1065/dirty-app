import React, {useState} from 'react';
import {Button, Container, Image, Modal} from "react-bootstrap";
import PostsService from './../../../services/Posts/posts.service';
import Post from "../index";
import searchIcon from './../../../assets/icon/search.svg';

const SearchPosts = () => {
    const [search, setSearch] = useState('');
    const [searchContainer, setSearchContainer] = useState(false);
    const [category, setCategory] = useState('');
    const [request, setRequest] = useState([]);
    const onChangeSearch = event => {
        setSearch(event.target.value)
    }

    const onChangeCategory = (event) => {
        setCategory(event.target.value)
    }
    const onSearch = async () => {
        if (search || category) {
            await PostsService.searchPost(search, category).then((response) => {
                setRequest(response.data)
                setSearchContainer(true)
            }).catch((error) => {
                console.log(error)
            })
        } else {
            console.log('Please input search word')
        }

    }
    const closeModal = () => {
        setSearchContainer(false)
    }
    return (
        <>
            <Container className="pb-3">
                {
                    searchContainer
                        ?
                        <Container>
                            <Modal show={searchContainer} fullscreen centered onHide={closeModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Results</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {
                                        request.map((post, index) => {
                                            return (
                                                <Post
                                                    key={index}
                                                    id={post.id}
                                                    title={post.title}
                                                    category={post.category.category}
                                                    user={post.user.name}
                                                    body={post.body}
                                                    postImg={post.img}
                                                    created_at={post.created_at}
                                                    icon={post.category.icon}

                                                />
                                            )
                                        })
                                    }
                                </Modal.Body>
                            </Modal>
                        </Container>
                        :
                        null
                }
                <div className="row no-gutters">
                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                        <select className="form-control" onChange={onChangeCategory} id="exampleFormControlSelect1">
                            <option value="">All</option>
                            <option value="1">IT</option>
                            <option value="2">Sport</option>
                            <option value="3">Music</option>
                            <option value="4">Movie</option>
                            <option value="5">Book</option>
                            <option value="6">OS</option>
                        </select>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-12 p-0">
                        <input type="search" value={search} onChange={onChangeSearch} placeholder="Search..."
                               className="form-control" id="search" name="search"/>
                    </div>
                    <div className="col-lg-1 col-md-3 col-sm-12 p-0">
                        <Button variant="outline" type="submit" className="btn btn-base" onClick={onSearch}>
                            <Image src={searchIcon} alt=""/>
                        </Button>

                    </div>
                </div>
            </Container>
        </>
    );
};

export default SearchPosts;