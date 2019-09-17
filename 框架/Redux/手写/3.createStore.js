const createStore = initState => {
    let state = initState;
    let listeners = [];

    // 订阅
    const subscribe = listener => listeners.push(listener);

    // changeState
    const changeState = newState => {
        state = newState;
        for (let listener of listeners)
            listener();
    }
    // getState
    const getState = () => state;

    return {
        subscribe,
        changeState,
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

const store = createStore(initState);

store.subscribe(() => {
    const state = store.getState();
    console.log(`${state.info.name}, ${state.info.desc}`)
})

store.subscribe(() => {
    const state = store.getState();
    console.log(state.counter)
})

store.changeState({
    ...store.getState(),
    info: {
        name: 1,
        desc: 'name1'
    }
});


store.changeState({
    ...store.getState(),
    counter: 1
})