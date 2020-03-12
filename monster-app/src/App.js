import React from 'react';
import './App.css';
import { CardList } from './Components /CardList/card-list'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
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
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <input type='search' 
          placeholder='search monsters' 
          onChange={e => {this.setState({ searchField: e.target.value});
          console.log(this.state)
        }}
         
        />
        <CardList monsters={filteredMonsters} />
        {/* {
      this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
      } */}
      </div>
     
    );
  }
}


export default App;
