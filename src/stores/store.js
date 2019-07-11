import { createStore } from 'redux';

const initState = {
    stack: {
        preact: '3kB gZip version of React.js',
        wouter: '1kB gZip version of React Router',
        redux: 'State management library'
    }
};

const reducers = (state, action) => {
    switch (action.type){
        default:
            return { ...state };
    }
};

const store = createStore(reducers, initState);
export default store;