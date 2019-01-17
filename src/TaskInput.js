import React, { Component } from 'react';

class TaskInput extends Component {
    constructor(){
        super()
        this.state = {
            inputText: ''
            }
    }
    onChangeText(event) {
        const value = event.target.value;
        this.setState ({
            inputText: value
        });
    }
    onClickAdd() {
        const value = this.state.inputText;

        if(value.trim().length === 0) {
            return;
        }

        this.setState ({
            inputText: ''
        })

        this.props.onAdd(value.trim());
    }
    render() {
        return (
            <div>
                <input type="text" id="js-inputTask" onChange={e => this.onChangeText(e)} placeholder="タスクを入力してね" />
                <button onClick={e => this.onClickAdd(e)}>追加</button>
            </div>
        )
    }
}
export default TaskInput;