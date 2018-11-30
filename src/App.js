import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      toDoList: [
        {
          id: 0,
          task: 'cdsad',
          done: true
        },
        {
          id: 1,
          task: 'task 2',
          done: true
        },
        {
          id: 2,
          task: 'task 3',
          done: true
        }
      ]
    }
    this.addTask = this.addTask.bind(this);
  }

  addTask(){
    const toDoList = this.state.toDoList;

    toDoList.push({
      id:666,
      task: 'task duplicato',
      done: false
    })
    this.setState({
      toDoList: toDoList
    })
  }

  render() {
    const toDoList = this.state.toDoList;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>To do list</h1>
        </header>
        <div>
          <ul>
            {
              toDoList.map((i) => {
                return(<li>{i.id} - {i.task} - {i.done ? 'done' : 'not done'}</li>)
              })
            }
            </ul>
            <button onClick={this.addTask}>Aggiungi un task duplicato</button>
            --------
            <ul>
            <li>
              {toDoList[0].id} - {toDoList[0].task} - {toDoList[0].done ? 'done' : 'not done'}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;



