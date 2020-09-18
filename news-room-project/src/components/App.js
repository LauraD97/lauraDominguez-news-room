import React from 'react';
import Header from './Header';
import Body from './Body';
import '../styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css' 

function App () {
  return (
    <div className="container">
        <Header/>
        <Body/>
    </div>
  );
}

export default App;