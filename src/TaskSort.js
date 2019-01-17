import React, { Component } from 'react';

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

export default TaskSort;