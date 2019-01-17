import React, { Component } from 'react';

class TaskList extends Component {
    render() {
        const displayTaskList = this.props.taskList.filter(item => {
            switch(this.props.filterType) {
                case "completed":
                    return item.completed === true;
                case "active":
                    return item.completed === false;
                default:
                    return true;
            }
        });

        const nodes = displayTaskList.map(item => {
            const node = item.completed === true
                ? <del>{item.label}</del>
                : <span>{item.label}</span>
            return (
                <li key={item.key}>
                    <label>
                        <input type="checkbox" checked={item.completed} onChange={e => this.props.onChangeItem(item.key)}></input>
                        {node}
                    </label>
                </li>
            );
        });
        return <ul className="App-todolist">{nodes}</ul>;
    }
}

export default TaskList;