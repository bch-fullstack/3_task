import logo from './logo.svg';
import './App.css';
import React from 'react'
import Result from './components/Result'

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
    const bgColor = isEven ? 'red' : 'yellow'

    return <div>
      <Result isEven={isEven} likes={this.state.likes} color={bgColor}/>
      
      <button id="increase-btn" onClick={this.increase}>Increase</button>
      <button id="decrease-btn" onClick={this.decrease}>Decrease</button>
      <button id="reset-btn" onClick={this.reset}>Reset</button>
    </div>
  }
}

export default App;
