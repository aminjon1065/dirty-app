import React, {useEffect, useState} from 'react';
import {Container, Image, Table} from "react-bootstrap";
import UsersService from './../../../../services/Users/users.service'
import avatar from './../../../../assets/avatar.svg';
import Loading from "../../../../components/ui/loading";

const IsOnline = () => {
    const [usersOnline, setUsersOnline] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchUsersOnline = () => {
            return UsersService.usersOnline().then((response) => {
                setUsersOnline(response.data)
                setLoading(false)
            })
        }
        fetchUsersOnline()
    }, [])
    return (
        <>
            <Container fluid className="shadow-sm rounded p-3">
                {
                    loading
                        ?
                        <Loading/>
                        :
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>Profession</th>
                                <th>Phone</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                usersOnline.map((user, index) => {
                                    return (

                                        <tr key={index}>
                                            <td>{user.user.id}</td>
                                            <td><Image src={avatar} width={36}/></td>
                                            <td>{user.user.name}</td>
                                            <td>{user.user.email}</td>
                                            <td>{user.user.profession}</td>
                                            <td>{user.user.phone}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                }
            </Container>
        </>
    );
};

export default IsOnline;