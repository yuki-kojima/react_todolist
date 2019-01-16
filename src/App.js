import React, { Component } from 'react';
import './App.css';
class TaskInput extends Component {
  render() {
    return (
      <div>
        <input type="text" id="js-inputTask" onChange={e => this.props.handleTextChange(e)} placeholder="タスクを入力してね" />
        <button onClick={e => this.props.handleAddClick(e)}>追加</button>
      </div>
    )
  }
}

class TaskList extends Component {
  render() {
    const nodes = [];
    for (var i = 0; i < this.props.taskList.length; i++) {
      const item = this.props.taskList[i];

      let flag = true;
      if (this.props.filterType === "all") {
      } else if (this.props.filterType === "active") {
        if (item.completed === true) {
          flag = false;
        }
      } else if (this.props.filterType === "completed") {
        if (item.completed === false) {
          flag = false;
        }
      }

      if (flag === true) {
        nodes.push(<li key={item.key}>
            <label>
              <input type="checkbox" checked={item.completed} onChange={e => this.props.handleListChange(e, item.key)} />
              {item.label}
            </label>
          </li>);
      }
    }
    return <ul className="App-todolist">{nodes}</ul>;
  }
}

class TaskSort extends Component {
  render() {
    return (
      <div>
        <label>
          <input type="radio" value="all" onChange={e => this.props.handleFilterChange(e.target.value)} checked={this.props.filterType === "all"} />
          全て
          </label>
        <label>
          <input type="radio" value="active" onChange={e => this.props.handleFilterChange(e.target.value)} checked={this.props.filterType === "active"} />
          未完了のみ
          </label>
        <label>
          <input type="radio" value="completed" onChange={e => this.props.handleFilterChange(e.target.value)} checked={this.props.filterType === "completed"} />
          完了のみ
          </label>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    // ステート
    this.state = {
      inputText: 'テスト',
      taskList: [],
      filterType: "all"
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleListChange = this.handleListChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
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
    });
  }
  render() {

    return <div className="App">
        <h1>TODO LIST</h1>
        <TaskInput handleTextChange={this.handleTextChange} handleAddClick={this.handleAddClick} />
        <p>{this.state.inputText}</p>
        <TaskList taskList={this.state.taskList} handleListChange={this.handleListChange} filterType={this.state.filterType}/>
        <TaskSort handleFilterChange={this.handleFilterChange} filterType={this.state.filterType} />
      </div>;
  }
}

export default App;
