import React, {useEffect} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Contents from "./pages/Contents";
import NavMenu from "./components/ui/navbar";
import AuthService from './services/AuthService'
import {useDispatch} from "react-redux";
import actions from "./states/actions/auth.action";
import Pusher from "pusher-js";
import msg from "./states/actions/newMessage.action";


function App() {

    const dispatch = useDispatch();
    Pusher.logToConsole = false;
    let pusher = new Pusher('0796ce77efaac9d621db', {
        cluster: 'ap2'
    });

    let channel = pusher.subscribe('messages-channel');
    channel.bind('messages-event', function (data) {
        if (data) {
            dispatch(msg.newMessage())
        }
    });
    useEffect(() => {
        const initialLoggedIn = () => {
            const token = localStorage.getItem('token');
            if (token) {
                AuthService.user(token).then((response) => {
                    dispatch(actions.login(response))
                })
            }
        }
        initialLoggedIn()
    }, [dispatch])
    return (
        <>
            <Router>
                <NavMenu/>
                <div className="bg-white">
                    <Contents/>
                </div>
            </Router>
        </>
    );
}

export default App;
