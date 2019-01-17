import React, { Component } from 'react';
import './App.css';
import Title from "./Title.js";
import TaskInput from './TaskInput.js';
import TaskList from "./TaskList.js";
import TaskSort from "./TaskSort.js";


class App extends Component {
  constructor() {
    super();
    // ステート
    this.state = {
      taskList: [],
      filterType: "all"
    };

  }
  handleAddClick(label) {
    const taskList = this.state.taskList.concat();
    const input = document.getElementById('js-inputTask');
    taskList.push({
      key: Date.now(), // ユニークなキーということで今回は時間
      completed: false, // 完了しているか
      label: label // タスクの文字列 
    });
    this.setState({
      taskList: taskList
    });
    input.value = '';
  }
  handleListChange(key) {
    const taskList = this.state.taskList.concat();

    for (var i = 0; i < taskList.length; i++) {
      if (taskList[i].key === key) {
        taskList[i].completed = !taskList[i].completed;
      }
    }
    this.setState({
      taskList: taskList
    })
  }
  handleFilterChange(value) {
    this.setState({
      filterType: value
    });
  }
  render() {

    return <div className="App">
        <Title />
        <TaskInput onAdd={label => this.handleAddClick(label)} />
        <TaskList taskList={this.state.taskList} onChangeItem={id => this.handleListChange(id)} filterType={this.state.filterType}/>
        <TaskSort handleFilterChange={value => this.handleFilterChange(value)} filterType={this.state.filterType} />
      </div>;
  }
}

export default App;
