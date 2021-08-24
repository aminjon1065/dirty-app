import React from 'react';
import {Alert} from "react-bootstrap";

const AlertInfo = ({show, variant, setshowAlert}) => {
    return (
        <>
            <Alert show={show} variant={variant} onClose={() => setshowAlert(false)} dismissible>
                Your request is {variant}
            </Alert>
        </>
    );
};

export default AlertInfo;