import React, {useState} from 'react';
import {Button, Container, Form, Row} from "react-bootstrap";
import AuthService from "../../../../services/AuthService";
import AlertInfo from "../../../../components/ui/Alert";

const AddUser = () => {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profession, setProfession] = useState('');
    const [address, setAdress] = useState('');
    const [phone, setPhone] = useState('');
    const [show, setShow] = useState(false);
    const [variantAlert, setVariantAlert] = useState('')
    const handleName = event => {
        setName(event.target.value)
    }

    const handleUserName = event => {
        setUserName(event.target.value)
    }

    const handleEmail = event => {
        setEmail(event.target.value)
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }

    const handleAddress = event => {
        setAdress(event.target.value)
    }

    const handleProfession = event => {
        setProfession(event.target.value)
    }

    const handlePhone = event => {
        setPhone(event.target.value)
    }
    const handleRegister = (event) => {
        event.preventDefault();
        AuthService.register(name, userName, email, password, address, profession, phone).then((response) => {
            if (response.status === 201) {
                setShow(true);
                setVariantAlert('success');
                setPhone('');
                setName('');
                setProfession('');
                setAdress('');
                setPassword('');
                setUserName('');
                setEmail('')
            }
        }).catch((error) => {
            if (error) {
                setShow(true)
                setVariantAlert('warning')
                console.log('error');
            }
        })
    }
    return (
        <>
            <AlertInfo show={show} variant={variantAlert} setshowAlert={setShow}/>
            <Container className="bg-light p-5">
                <Form onSubmit={handleRegister}>
                    <Row>
                        <Form.Group className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
                            <Form.Label htmlFor="inputName">Full Name</Form.Label>
                            <Form.Control type="text"
                                          value={name}
                                          onChange={handleName}
                                          required
                                          id="inputName"
                                          placeholder="Ivanov Ivan Ivanovich"
                            />
                        </Form.Group>
                        <Form.Group className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
                            <Form.Label htmlFor="inputUserName">User Name</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                autoComplete="none"
                                id="inputUserName"
                                placeholder="i'm_Batman"
                                value={userName}
                                onChange={handleUserName}
                            />
                        </Form.Group>
                    </Row>
                    <hr/>
                    <Row>
                        <Form.Group className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
                            <Form.Label htmlFor="inputEmail">Email</Form.Label>
                            <Form.Control
                                type="email"
                                required
                                id="inputEmail"
                                placeholder="test@example.org"
                                value={email}
                                onChange={handleEmail}
                            />
                        </Form.Group>
                        <Form.Group className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
                            <Form.Label htmlFor="inputPassword">Password</Form.Label>
                            <Form.Control
                                type="password"
                                required id="inputPassword"
                                placeholder="password"
                                value={password}
                                onChange={handlePassword}
                            />
                        </Form.Group>
                    </Row>
                    <hr/>
                    <Form.Group className="col-12">
                        <Form.Label htmlFor="inputAddress">Address</Form.Label>
                        <Form.Control
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="1234 Main St"
                            value={address}
                            onChange={handleAddress}
                        />
                    </Form.Group>
                    <hr/>
                    <Row>
                        <Form.Group className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
                            <Form.Label htmlFor="inputProfession">Profession</Form.Label>
                            <Form.Control
                                type="text"
                                required id="inputProfession"
                                placeholder="WEB-developer"
                                value={profession}
                                onChange={handleProfession}
                            />
                        </Form.Group>
                        <Form.Group className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
                            <Form.Label htmlFor="inputPhone">Phone</Form.Label>
                            <Form.Control
                                type="tel"
                                required id="inputPhone"
                                placeholder="992123456789"
                                value={phone}
                                onChange={handlePhone}
                            />
                        </Form.Group>
                    </Row>
                    <hr/>
                    <Button
                        variant="outline-primary"
                        className="float-end signIn"
                        type="submit"
                    >
                        Add User
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default AddUser;