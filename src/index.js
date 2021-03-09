import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends Component {
  state = { konum: null, hata: '' };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (konum) => this.setState({ konum: konum.coords.latitude }),
      (hata) => this.setState({ hata: hata.message })
    );
  }

  render() {
    if (this.state.hata && !this.state.konum) {
      return <div>Hata olustu: {this.state.hata} </div>;
    }
    if (!this.state.hata && this.state.konum) {
      return <SeasonDisplay enlem={this.state.konum} />;
    }
    return <div> Loading... </div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
