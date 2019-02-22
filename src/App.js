import React, { Component } from 'react';
import logo from './logo.png';
import Countdown from './Countdown.js';
import './App.css';

class App extends Component {

  dates() {
    let dayOfWeek = 5; //friday
    let date = new Date();
    date.setDate(date.getDate() + (dayOfWeek + 7 - date.getDay()) % 7);
    return date;
  }


  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    const month = ((currentDate.getUTCMonth() + 1 ) < 10) ? (`0${currentDate.getUTCMonth() + 1}` ) : (currentDate.getUTCMonth() + 1 ) ; //months from 1-12
    const day = currentDate.getUTCDate() < 10 ? `0${currentDate.getUTCDate()}` : `${currentDate.getUTCDate()}`

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Tiempo restante para verte !
          </p>
          <a
            className="App-link"
            href="#OohhSii"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Countdown date={`${year}-${month}-${day}T16:30:00`} />
          </a>
        </header>
      </div>
    );
  }
}

export default App;
