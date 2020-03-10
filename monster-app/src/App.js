import React from 'react';
import './App.css';
import { CardList } from './Components /CardList/card-list'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      monsters: []
      //   {
      //     name: 'Frankenstein',
      //     id: 'asc1'
      //   },
      //   {
      //     name: 'Dracula',
      //     id: 'asc2'
      //   },
      //   {
      //     name: 'Zombie',
      //     id: 'asc3'
      //   }
      // ]
    };
  }

  componentDidMount() {
    // this calls whatever block of code being run
    fetch('https://jsonplaceholder.typicode.com/users')
    // returns a promise (then)
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
    // .then(promise => console.log(promise))
  }

  render(){
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
        {/* {
      this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
      } */}
      </div>
     
    );
  }
}


export default App;
