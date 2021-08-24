import React from 'react';
import {Route, Switch} from "react-router-dom";
import SignIn from "./Auth/SignIn";
import Main from "./Main";
import SignUp from "./Auth/SignUp";
import Dashboard from "./Dashboard";
import NotFound from "../components/404/404";
import Posts from "./Posts";
import ShowPost from "./Posts/show";
import UsersPosts from "./Posts/usersPosts";

const Contents = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/dirty-board" component={Dashboard}/>
                <Route path="/sign-in" component={SignIn}/>
                <Route path="/sign-up" component={SignUp}/>
                <Route path="/articles" component={Posts}/>
                <Route path="/my-articles" component={UsersPosts}/>
                <Route path="/article/:id" component={ShowPost}/>
                <Route component={NotFound}/>
            </Switch>
        </>
    );
};

export default Contents;