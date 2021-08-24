import React, {useEffect, useState} from 'react';
import ChatService from './../../../services/Chat/chat.service';
import {useSelector} from "react-redux";
import {Container, Image} from "react-bootstrap";
import avatar from './../../../assets/avatar.svg'


const MessagesComponent = ({currentRoom, toggle}) => {
    const [messages, setMessages] = useState([]);
    const selector = useSelector(state => state.auth);
    const newMsg = useSelector(state => state.newMsg);
    useEffect(() => {

        if (currentRoom) {
            ChatService.getMessages(currentRoom).then((response) => {
                setMessages(response.data)
            })
        }
    }, [currentRoom, toggle, newMsg.message])
    return (
        <>
            <div className="overflow-auto" style={{height: "400px"}}>
                {
                    messages.map((msg) => {
                        return (
                            selector.user.id === msg.userId
                                ?
                                <Container key={msg.id} className="float-end">
                                    <div
                                        className="d-flex justify-content-end bg-messages rounded m-1 p-1"
                                    >
                                        <strong>Me:</strong> {msg.message}</div>
                                </Container>
                                :
                                <Container key={msg.id}>
                                    <Container className="bg-light">
                                        <Image src={avatar} width="36" className="pe-1"/>
                                        <i>{msg.user.name}</i> {msg.message}
                                    </Container>
                                </Container>
                        )
                    })
                }
            </div>

        </>
    );
};

export default MessagesComponent;