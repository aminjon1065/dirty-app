import avatar from "../assets/avatar.svg";
import {NavDropdown} from "react-bootstrap";
import React from "react";

<NavDropdown title={<>
    <div className="d-flex justify-content-center h-100">
        <div className="image_outer_container">
            <div className="green_icon"></div>
            <div className="image_inner_container">
                <img src={avatar}/>
            </div>
        </div>
    </div></>}