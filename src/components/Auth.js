import React from 'react';
import { useDispatch } from 'react-redux';

export const Auth = ({ children }) => {
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}