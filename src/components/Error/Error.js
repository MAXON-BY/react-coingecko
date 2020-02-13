import React from 'react';
import './Error.css'
import {REQUEST_FAILED, SOMETHING_WENT_WRONG} from "../../api/axios/apiConstants";

const Error = (props) => {
    const {error} = props;

    return (
        <div className={'container error-api'}>
            {error === REQUEST_FAILED && <div>{REQUEST_FAILED}</div>}
            {error === SOMETHING_WENT_WRONG && <div>{SOMETHING_WENT_WRONG}</div>}
        </div>
    );
};

export default Error;