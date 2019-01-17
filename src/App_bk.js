import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        // ステート
        this.state = {
            inputText: 'テスト',
            taskList: [],
            filterType: "all"
        };
    }
    handleTextChange(event) {
        this.setState({
            inputText: event.target.value
        });
    }
    handleAddClick() {
        const taskList = this.state.taskList.concat();
        const input = document.getElementById('js-inputTask');
        taskList.push({
            key: Date.now(), // ユニークなキーということで今回は時間
            completed: false, // 完了しているか
            label: this.state.inputText // タスクの文字列 
        });
        this.setState({
            taskList: taskList
        });
        input.value = null;
    }
    handleListChange(event, key) {
        const checked = event.target.checked;
        const taskList = this.state.taskList.concat();

        for (var i = 0; i < taskList.length; i++) {
            if (taskList[i].key === key) {
                taskList[i].completed = checked;
            }
        }
        this.setState({
            taskList: taskList
        })
    }
    handleFilterChange(filterType) {
        this.setState({
            filterType: filterType
        })
    }
    render() {
        const nodes = [];
        for (var i = 0; i < this.state.taskList.length; i++) {
            const item = this.state.taskList[i];

            let flag = true;
            if (this.state.filterType === "all") {
            } else if (this.state.filterType === "active") {
                if (item.completed === true) {
                    flag = false;
                }
            } else if (this.state.filterType === "completed") {
                if (item.completed === false) {
                    flag = false;
                }
            }

            if (flag === true) {
                nodes.push(<li key={item.key}>
                    <label><input type="checkbox" checked={item.completed} onChange={(e) => this.handleListChange(e, item.key)} />{item.label}</label>
                </li>);
            }
        }

        return <div className="App">
            <h1>TODO LIST</h1>
            <div>
                <input type="text" id="js-inputTask" onChange={e => this.handleTextChange(e)} placeholder="タスクを入力してね" />
                <button onClick={e => this.handleAddClick(e)}>追加</button>
            </div>
            <p>{this.state.inputText}</p>
            {/* this.stateはコンストラクタで作ったもの */}
            <ul className="App-todolist">{nodes}</ul>
            <div>
                <label>
                    <input type="radio" value="all" onChange={e => this.handleFilterChange(e.target.value)} checked={this.state.filterType === "all"} />
                    全て
          </label>
                <label>
                    <input type="radio" value="active" onChange={e => this.handleFilterChange(e.target.value)} checked={this.state.filterType === "active"} />
                    未完了のみ
          </label>
                <label>
                    <input type="radio" value="completed" onChange={e => this.handleFilterChange(e.target.value)} checked={this.state.filterType === "completed"} />
                    完了のみ
          </label>
            </div>
        </div>;
    }
}

export default App;
