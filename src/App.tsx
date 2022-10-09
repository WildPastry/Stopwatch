import React from 'react';

let timerInt: string | number | NodeJS.Timer | undefined;

class App extends React.Component<{},
{ timerOn: boolean,
  timerText: number,
  buttonText: string,
  buttonClass: string
}> {
  // CONSTRUCTOR
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      timerOn: false,
      timerText: 0,
      buttonText: 'START',
      buttonClass: 'btn btn-info'
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetWatch = this.resetWatch.bind(this);
  }

  // FUNCTIONS
  toggleTimer() {
    if (this.state.timerOn === false) {
      timerInt = setInterval(() => this.tick(), 1000);
      this.setState({
        timerOn: true,
        buttonText: 'STOP',
        buttonClass: 'btn btn-warning'
      });
    } else {
      clearInterval(timerInt);
      this.setState({
        timerOn: false,
        buttonText: 'CONTINUE',
        buttonClass: 'btn btn-info'
      });
    }
  }

  tick() {
    const newTime = this.state.timerText + 1;
    this.setState({
      timerText: newTime
    });
  }

  resetWatch() {
    this.setState({
      timerText: 0,
      buttonText: 'START',
      buttonClass: 'btn btn-info'
    });
  }

  // RENDER
  render() {

    const { buttonText, buttonClass } = this.state;
    let button: string | number | boolean | React.ReactFragment | JSX.Element | null | undefined;
    if ((this.state.timerOn === false) && (this.state.timerText > 0)) {
      button = <button className='btn btn-danger' onClick={this.resetWatch}>RESET</button>;
    }

    return (
      <div className='d-flex align-items-center h-100 bg-dark'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-6'>
              <div className='card text-center'>
                <h1 className='display-4'>STOPWATCH</h1>
                <h2 className='display-2'>{this.state.timerText}</h2>
                <button className={buttonClass} onClick={this.toggleTimer}>{buttonText}</button>
                {button}
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
