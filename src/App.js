import logo from './logo.svg';
import './App.css';
import React from 'react'

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    likes: 0
  }

  increase = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  decrease = () => {
    if (this.state.likes == 0) {
      return;
    }
    
    this.setState({
      likes: this.state.likes - 1
    })
  }

  reset = () => {
    this.setState({
      likes: 0
    })
  }

  render(){
    const isEven = this.state.likes % 2 === 0
    return <div 
        style={{ backgroundColor: isEven ? 'red' : 'yellow' }}
        className={'myClass ' + (isEven ? 'even' : 'odd')}
      >

      Total likes: {this.state.likes}
      <button id="increase-btn" onClick={this.increase}>Increase</button>
      <button id="decrease-btn" onClick={this.decrease}>Decrease</button>
      <button id="reset-btn" onClick={this.reset}>Reset</button>
    </div>
  }
}

export default App;
