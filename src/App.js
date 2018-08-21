import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Components/ValidationComponent/ValidationComponent';
import CharComponent from './Components/CharComponent/CharComponent';

class App extends Component {

  state = {
    textInputValue: ''
  };

  showTextLengthHandler = (event) =>{
    this.setState({textInputValue: event.target.value})
  }

  removeTextLetterHandler = (index) =>{
    const textInput = this.state.textInputValue.split('');
    textInput.splice(index, 1);
    this.setState({textInputValue: textInput.join('')});
  }

  render() {
    let words = " word";

    if(this.state.textInputValue.length > 1)
      words = " words";

      const charComponentsDiv = this.state.textInputValue.split('').map((charComponent, index)=>{
          return <CharComponent 
                    letter={charComponent}
                    key={index}
                    click={this.removeTextLetterHandler.bind(this, index)} />;
      });
      
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Exercice 2 - Lists</h1>
        </header>

        <input type="text" onChange={this.showTextLengthHandler} value={this.state.textInputValue} />
        
        <p>
          {this.state.textInputValue.length} {words}
        </p>

        <ValidationComponent lengthText={this.state.textInputValue.length} />

        {charComponentsDiv}

      </div>
    );
  }
}

export default App;
