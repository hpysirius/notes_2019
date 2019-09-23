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
    counter: {
        count: 0
    },
    info: {
        name: 'hh',
        desc: ''
    }
}


/*counterReducer, 一个子reducer*/
/*注意：counterReducer 接收的 state 是 state.counter*/
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}

/*InfoReducer，一个子reducer*/
/*注意：InfoReducer 接收的 state 是 state.info*/
const InfoReducer = (state, action) => {
    switch(action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.name
            }
        case 'SET_DESC':
            return {
                ...state,
                desc: action.desc
            }
        default:
            return  state;
    }
}

const reducer = combineReducers({
    counter: counterReducer,
    info: InfoReducer
})


function combineReducers(reducers) {
    /* reducerKeys = ['counter', 'info']*/
    const reducerKeys = Object.keys(reducers);

    /*返回合并后的新的reducer函数*/
    return function combination(state = {}, action) {
        // 生成新的state
        const nextState = {};
        for(let i = 0; i < reducerKeys.length; i++) {
            const key = reducerKeys[i];
            const reducer = reducers[key];
            /*之前的 key 的 state*/
            const preState = state[key];
            /*执行 分 reducer，获得新的state*/
            const curState = reducer(preState, action);
            nextState[key] = curState;
        }
        return nextState;
    }
}




const store = createStore(reducer, initState);

// store.subscribe(() => {
//     const state = store.getState();
//     console.log(`${state.info.name}, ${state.info.desc}`)
// })

store.subscribe(() => {
    const state = store.getState();
    console.log(state.counter.count, state.info.name)
})

// 自增
store.dispatch({
    type: 'INCREMENT'
});
// 修改 name
store.dispatch({
    type: 'SET_NAME',
    name: 'hpy1'
});