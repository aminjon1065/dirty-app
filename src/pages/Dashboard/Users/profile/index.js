import React from 'react';
import ProfileUser from "../../../../components/users/profile/profile";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {Container} from "react-bootstrap";

const MyProfile = () => {
    const selector = useSelector(state => state.auth)
    if (!selector.user) {
        return <Redirect to="/sign-in"/>;
    }

    return (
        <>
            <Container>
                <ProfileUser
                id={selector.user.id}
                name={selector.user.name}
                address={selector.user.address}
                username={selector.user.username}
                email={selector.user.email}
                phone={selector.user.phone}
                profession={selector.user.profession}
                created_at={selector.user.created_at}
                />
            </Container>
        </>
    );
};

export default MyProfile;