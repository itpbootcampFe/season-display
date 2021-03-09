import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  navigator.geolocation.getCurrentPosition(
    //success
    (konum) => console.log(`enlem: `, konum.coords.latitude),
    //error
    (hata) => console.log(`hata Mesaji: `, hata.message)
  );
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}> this is season app</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
