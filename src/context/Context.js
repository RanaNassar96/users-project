import React, { createContext, useReducer, useEffect } from 'react';
import Reducer from './Reducer'

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isFetching:false,
    error: false
}



export const Context = createContext(INITIAL_STATE);

export const ContextProvider = (props) => {

    const [ state , dispatch ] = useReducer( Reducer , INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem('user' , JSON.stringify(state.user));
        console.log('fff' , localStorage.getItem('user'));
    } , [state.user]);
    return (
        <Context.Provider value={
            {
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }
        }>
            {props.children}
        </Context.Provider>
    );
}
