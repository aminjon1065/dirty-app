import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import ChatService from './../../../services/Chat/chat.service';
import InputEmoji from 'react-input-emoji'


const NewMessage = ({roomId, onToggle}) => {
    const [newMessage, setNewMessage] = useState('');
    const token = localStorage.getItem('token');
    const onSendMessage = (event) => {
        ChatService.newMessage(roomId, newMessage, token).then((response) => {
            setNewMessage('')
            onToggle(prevToggle => !prevToggle)
        })
    }

    return (
        <div>
            <Container className="pt-3 d-flex">
                < InputEmoji
                    aria-label="Amount (to the nearest dollar)"
                    value={newMessage}
                    onChange={setNewMessage}
                    onEnter={onSendMessage}
                />
                {
                    roomId && newMessage
                    ?
                        <Button onClick={onSendMessage} className="m-2"><i className="fas fa-paper-plane"></i></Button>
                        :
                        <Button disabled  onClick={onSendMessage} className="m-2"><i className="fas fa-paper-plane"></i></Button>
                }
            </Container>
        </div>
    );
};

export default NewMessage;