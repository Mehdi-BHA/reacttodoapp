import React from 'react';
import './App.css';
import List from './components/List';

class App extends React.Component{
  
  state = {
    tasks:[],
    currentTask:{
      text:"",
      key:""
    }
  };

  handleInput(e) {
    this.setState({
      currentTask:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }

  addTask(e){
    e.preventDefault();
    const newTask = this.state.currentTask;
    if(this.state.tasks.map(elem=>(elem.text)).includes(newTask.text)){alert("already exists")}
    if(newTask.text!=="" && !this.state.tasks.map(elem=>(elem.text)).includes(newTask.text)){
      const newTasks = [...this.state.tasks,newTask]
      this.setState({
        tasks:newTasks, currentTask:{text:"",key:""}
      })
    }
  }

  deleteTask(key){
    const filteredTasks= this.state.tasks.filter(elem=>elem.key!==key)
    this.setState({
      tasks: filteredTasks
    })
  }

  editTask(val,k){
    const items = this.state.tasks
    items.map(elem => {
      if(elem.key===k){
        elem.text=val
      }
    })

    this.setState({
      tasks: items
    })

  }

  render(){
    return (
      <div className="App">
        <h1>Things to do:</h1>
        <form className="todo-form">
          <input type="text" placeholder="Ajoutez une tâche !" value={this.state.currentTask.text} onChange={this.handleInput.bind(this)}></input>
          <button type="submit" onClick={this.addTask.bind(this)}>Ajouter</button>
        </form>
        <List allTasks={this.state.tasks} deleteTask={this.deleteTask.bind(this)} editTask={this.editTask.bind(this)}></List>
      </div>
    );
  }
}

export default App;
