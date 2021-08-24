import React, {useState} from 'react';
import {Link, Redirect, useHistory} from 'react-router-dom';
import {Button, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import logo from './../../../assets/logo.svg'
import actions from "../../../states/actions/auth.action";
import './../../../styles/sign.css'
import AuthService from './../../../services/AuthService';
import actionsOnline from "../../../states/actions/online.action";

const SignIn = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleLogin = (event) => {
        event.preventDefault();
        AuthService.login(email, password).then((response) => {
            const token = response.data.access_token;
            AuthService.user(token).then((response) => {
                dispatch(actions.login(response))
            })
            AuthService.isOnline(token).then(() => {
                dispatch(actionsOnline.online())
            })
            history.push('/')
        })
    }
    const selector = useSelector(state => state.auth.isLoggedIn)

    if (selector) {
        return <Redirect to="/"/>;
    }
    return (
        <Container>
            <form onSubmit={handleLogin} className="form-signin rounded shadow gradient"
                  style={{height: `90vh`, width: `100%`}}>
                <Container className="d-flex justify-content-center">
                    <img className="mb-4 signin-img" src={logo} alt="" width="150"
                         height="150"/>
                </Container>
                <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input
                    type="email"
                    id="inputEmail"
                    value={email}
                    onChange={onChangeEmail}
                    className="form-control"
                    placeholder="Email address"
                    required
                    autoFocus
                />
                <label
                    htmlFor="inputPassword"
                    className="sr-only"
                >
                    Password
                </label>
                <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    value={password}
                    onChange={onChangePassword}
                    placeholder="Password"
                    required
                />
                <Button
                    className="float-end"
                    type="submit"
                >
                    Sign in
                </Button>
                <p
                    className="mt-5 text-muted text-center"
                >
                    &copy; 2021
                </p>
                <div className="container d-flex justify-content-center">
                    <Link to="/sign-up"><Button variant="outline" id="signInButton" className="rounded">Sign Up</Button></Link>
                </div>
            </form>

        </Container>
    )
};
export default SignIn;
