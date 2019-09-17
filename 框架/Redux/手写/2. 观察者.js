let state = {
    count: 1
}
let listeners = [];
// 订阅
function subscribe(listener){
    listeners.push(listener);
}

function changeCount(count) {
    state.count = count;
    for(let i = 0; i < listeners.length; i++){
        listeners[i]();
    }
}

subscribe(() => { console.log(state.count) })
changeCount(2);
changeCount(3);