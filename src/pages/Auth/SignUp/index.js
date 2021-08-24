import React, {useState} from 'react';
import {Button, Col, Container, Form, Row, Alert, Modal} from "react-bootstrap";
import logo from './../../../assets/logo.svg'
import {Link, useHistory} from "react-router-dom";
import './../../../styles/sign.css';
import AuthService from './../../../services/AuthService'

const SignUp = () => {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profession, setProfession] = useState('');
    const [address, setAdress] = useState('');
    const [phone, setPhone] = useState('');
    const history = useHistory();
    const [show, setShow] = useState(false)
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
                history.push('/sign-in')
            } else if (response.status === 500) {
                setShow(true)
            }
        })
    }
    return (
        <>
            <Container>
                <Modal
                    size="lg"
                    show={show}
                    onHide={() => setShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>

                    </Modal.Header>
                    <Modal.Body>
                        <Alert variant="danger">
                            <Alert.Heading>ERROR</Alert.Heading>
                            <p>
                                Возможно вы ввели существующие данные. Если у Вас есть аккаунт, можете <span><Link
                                to="/sign-in"><Button variant="outline-primary">Войти</Button></Link></span>
                            </p>
                            <span>Иначе закройте предупреждение</span>
                            <hr/>
                        </Alert>

                    </Modal.Body>
                </Modal>
            </Container>
            <Container className="vh-100 d-flex align-items-center justify-content-center">
                <Container className="sign-up-bg shadow">
                    <Row className="p-3">
                        <Col xs={12} md={6} className="bg-info-app mb-3 d-none d-sm-block">
                            <div className="d-flex flex-column align-items-center align-middle">
                                <img className="mb-4 signin-img" src={logo} alt="" width="150"
                                     height="150"/>
                                <div>
                                    Тестовый App <h2>"Dirty-bord"</h2> - написано (😁 "Ты меня ресмешнила") в качестве
                                    дпломной работы :)
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
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
                                <h6>Have Account?</h6>
                                <Link
                                    to="/sign-in"
                                >
                                    <Button
                                        variant="outline"
                                        id="signInButton"
                                        className="rounded
                                        float-start"
                                    >
                                        Sign In
                                    </Button>
                                </Link>
                                <Button
                                    variant="outline-primary"
                                    className="float-end signIn"
                                    type="submit"
                                >
                                    Register
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default SignUp;