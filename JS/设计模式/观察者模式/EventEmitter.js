class EventEmitter {
  constructor() {
    this._events = {};
  }
  // 监听event事件
  on(event, callback) {
    const callbacks = this._events[event] || [];
    callbacks.push(callback);
    this._events[event] = callbacks;
    return this;
  }
  // 停止监听某个事件
  off(event, callback) {
    const callbacks = this._events[event];
    this._events[event] = callbacks && callbacks.filter(fn => fn !== callback);
    return this;
  }
  // 触发事件
  emit(...args) {
    const event = args[0];
    const params = [].slice.call(args, 1);
    const callbacks = this._events[event] || [];
    callbacks.forEach(fn => fn.apply(this, params));
    return this;
  }
  // 为事件注册单次监听器
  once(event, callback) {
    const func = (...args) => {
      callback.apply(this, args);
      this.off(event, func);
    };
    this.on(event, func);
    return this;
  }
}


const ins = new EventEmitter();
ins.on('click1', () => {
  console.log('click1');
})
;
ins.on('click1', () => {
  console.log('click111');
});
ins.on('click2', () => {
  console.log('click2');
});

ins.emit('click1');
ins.once('click33', () => {
  console.log('111');
})
;

ins.emit('click33');

ins.emit('click33');
