import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { konum: null, hata: null };

    navigator.geolocation.getCurrentPosition(
      //success
      (konum) => {
        this.setState({ konum: konum.coords.latitude });
        /// WRONG!!! state={{ konum: konum.coords.latitude }}
        console.log(`konum: `, this.state.konum);
      },
      //error
      (hata) => {
        this.setState({ hata: hata.message });
        console.log(`hata Mesaji: `, this.state.hata);
      }
    );
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}> this is season app</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
