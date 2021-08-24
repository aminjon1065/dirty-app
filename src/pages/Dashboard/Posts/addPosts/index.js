import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import PostsService from './../../../../services/Posts/posts.service';
import AlertInfo from "../../../../components/ui/Alert";

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [categoryId, setCategoryId] = useState(0)
    const [show, setShow] = useState(false)
    const token = localStorage.getItem('token');
    const addTitle = event => {
        setTitle(event.target.value)
    }

    const addBody = event => {
        setBody(event.target.value)
    }

    const addCategory = event => {
        setCategoryId(event.target.value)
    }
    const addPost = (event) => {
        event.preventDefault()
        PostsService.store(title, body, categoryId, token).then((response) => {
            if (response.status === 200) {
                setTitle('')
                setBody('')
                setCategoryId('')
                setShow(true)
            }
        })
    }
    return (
        <>
            <AlertInfo show={show} variant="success" setshowAlert={setShow}/>

            <Container>
                <Form onSubmit={addPost}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={title} type="text" onChange={addTitle}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Body</Form.Label>
                        <Form.Control as="textarea" value={body} rows={3} onChange={addBody}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput3">
                        <Form.Label>CategoryId</Form.Label>
                        <Form.Select onChange={addCategory} value={categoryId}>
                            <option hidden>Select Category</option>
                            <option value="1">IT</option>
                            <option value="2">Sport</option>
                            <option value="3">Music</option>
                            <option value="4">Movie</option>
                            <option value="5">Books</option>
                            <option value="6">OS</option>
                        </Form.Select>
                    </Form.Group>
                    <br/>
                    <Button variant="success" type="submit" className="float-end">Add Post</Button>
                </Form>
            </Container>
        </>
    );
};

export default AddPost;