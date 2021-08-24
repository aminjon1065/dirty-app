import React from 'react';
import './loading.css'

const Loading = () => {
    return (
        <div className="d-flex justify-content-center align-middle ">
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;