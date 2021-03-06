import React, { Component } from 'react';
import Classes from './App.css';
import ValidationComponent from './components/ValidationComponent'
import CharComponent from './components/CharComponent'
class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      textLength : '',
      textValue: ''
    }
  }
  deleteChar = (index) => { 
    const textValue = [...this.state.textValue]
    //deleting the clicked index from textValue
    textValue.splice(index,1)
    this.setState({
      textValue:textValue.join('')
    })
  }
  characterLength = (event) => {
    this.setState({
      textLength : event.target.value.length,
      textValue: event.target.value
    })

  }
  render() {
    const {textLength,textValue} = this.state
    console.log('textValue', textValue)
    return (
      <div className={Classes.App}>
          <h1 className={Classes.AppTitle}>CharComponent</h1>
          <input value={this.state.textValue} onChange={this.characterLength} />
          <p>length of character : <span>{textLength}</span></p>
          <ValidationComponent textLength={textLength} />
          {textValue.split('').map((value,index)=>{
            return <CharComponent charVal={value} deleteChar={()=>this.deleteChar(index)}/>
          })}
      </div>
    );
  }
}

export default App;
