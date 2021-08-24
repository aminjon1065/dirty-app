import React, {useEffect, useState} from 'react';
import ChatService from './../../services/Chat/chat.service';
import {Col, Container, Row, ListGroup} from "react-bootstrap";
import './../../styles/chat.css';
import NewMessage from "./newMessage";
import MessagesComponent from "./messages";

const Chat = () => {
    const [rooms, setRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState('');
    const [toggle, setToggle] = useState(false);
    // const [messages, setMessages] = useState([]);
    useEffect(() => {
        const getChat = () => {
            ChatService.getRooms().then((response) => {
                setRooms(response.data)
            })
            // if (currentRoom) {
            //     ChatService.getMessages(currentRoom).then((response) => {
            //         setMessages(response.data)
            //     })
            // }
        }
        getChat()
    }, [currentRoom])
    const onChangeRoom = (event) => {
        setCurrentRoom(event.target.value)
    }
    const onSelectRoom = (id) => {
        setCurrentRoom(id)
    }
    return (
        <>
            <Container>
                <Container className="d-flex justify-content-end pb-2">
                    <select name="rooms" id="rooms" value={currentRoom} className="form-select-sm"
                            onChange={onChangeRoom}>
                        <option hidden>Select Room</option>
                        {
                            rooms.map((room, index) => {
                                return (
                                    <option key={index} value={room.id}>{room.name}</option>
                                )
                            })
                        }
                    </select>
                </Container>
                <Container fluid>
                    <Row>
                        <Col lg="2" className="h-100 p-3 rounded border">
                            <ListGroup>
                                {
                                    rooms.map((room) => {
                                        return (
                                            <ListGroup.Item
                                                action
                                                onClick={() => {
                                                    onSelectRoom(room.id)
                                                }}
                                                key={room.id}

                                            >
                                                {room.name}
                                            </ListGroup.Item>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Col>
                        <Col className="h-100 ms-2 p-3 rounded border">
                            {
                                currentRoom
                                    ?
                                    <MessagesComponent currentRoom={currentRoom} toggle={toggle}/>
                                    :
                                    <p>Please Select Room</p>
                            }
                            <Container fluid >
                                <NewMessage roomId={currentRoom} onToggle={setToggle}/>
                            </Container>
                        </Col>
                    </Row>

                </Container>
            </Container>
        </>
    );
};

export default Chat;