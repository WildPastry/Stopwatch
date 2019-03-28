import React, { Component } from 'react';
import './App.css';

var timerInt;

class App extends Component {

  // CONSTRUCTOR
  constructor(){
      super();
      this.state = {
        timerOn: false,
        timerText: 0,
        buttonText: 'START',
        buttonClass: 'btn btn-warning'
      }

      this.toggleTimer = this.toggleTimer.bind(this);
}

// FUNCTIONS
toggleTimer(){
  if (this.state.timerOn === false){
    timerInt = setInterval(
      () => this.tick(), 1000
    );

  } else {
  console.log('turned timer off');
  }
}

tick(){
  var newTime = this.state.timerText +1;
  this.setState({
      timerText: newTime
  })
}

  // RENDER
  render() {

    let {buttonText, buttonClass} = this.state;

    return (
      <div className="d-flex align-items-center h-100 bg-danger">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="card text-center">
                <h1 className="display-4">Stopwatch</h1>
                <h2 className="display-2">{this.state.timerText}</h2>
                <button className={buttonClass} onClick={this.toggleTimer}>{buttonText}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// EXPORT
export default App;
