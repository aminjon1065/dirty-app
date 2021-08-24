import React from 'react';
import Modal from "react-bootstrap/Modal";
import ProfileUser from "./profile";


const ModalUsersInfo = ({id, name, address, username, email, phone, profession, created_at, articles_length, onCloseInfoUser, onCloseLoader, show, onHide}) => {
    return (
        <>
            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        User Info
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProfileUser
                        id={id}
                        name={name}
                        address={address}
                        username={username}
                        email={email}
                        phone={phone}
                        profession={profession}
                        created_at={created_at}
                        articles_length={articles_length}
                        onCloseInfoUser={onCloseInfoUser}
                        onCloseLoader={onCloseLoader}
                        onHide={onHide}
                    />
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>

        </>
    )
        ;
};

export default ModalUsersInfo;