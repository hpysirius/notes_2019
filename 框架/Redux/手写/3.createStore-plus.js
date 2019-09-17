const createStore = (reducer, initState) => {
    let state = initState;
    let listeners = [];

    // 订阅
    const subscribe = listener => listeners.push(listener);

    // dispatch
    const dispatch = action => {
        state = reducer(state, action);
        for (let listener of listeners)
            listener();
    }
    // getState
    const getState = () => state;

    return {
        subscribe,
        dispatch,
        getState
    }
}


let initState = {
    counter: 0,
    info: {
        name: '',
        desc: ''
    }
}



const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

const store = createStore(reducer, initState);

// store.subscribe(() => {
//     const state = store.getState();
//     console.log(`${state.info.name}, ${state.info.desc}`)
// })

store.subscribe(() => {
    const state = store.getState();
    console.log(state.counter)
})


store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'INCREMENT'
});
store.dispatch({
    type: 'DECREMENT'
});