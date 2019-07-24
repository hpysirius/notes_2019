import React from 'react';

export default class Consumer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            result: 0,
            value: 0
        }
    }
    // 新的方法，接收 nextProps 和 prevState
    static getDerivedStateFromProps(nextProps, prevState) {
        // prevState.value 相当于当前组件的 this.props.value，是存在 state 的副本
        if (prevState.value !== nextProps.value) {
            // 返回新的state（只需返回更新的部分，与 `setState` 相同）
            return {
                // 相当于上面的 getResult，但只有一处
                result: nextProps.value,
                // 又一次保存副本
                value: nextProps.value
            }
        }
        // 返回 null 表示不更新，此函数最后一定需要返回值
        return null
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(prevProps, prevState, '11');
        if(prevProps.value !== prevProps.value){
            return null;
        }
        return null;
    }
    // 以下都相同
    handleChange = e => {
        this.props.getResult(e.target.value)
        // this.setState({
        //     result: e.target.value
        // })
    }
    render() {
        return (
            <input type="text"
                onChange={this.handleChange}
                value={this.state.result}></input>
        )
    }
}

