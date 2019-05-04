import React from 'react';
import logo from './logo.svg';
import './App.css';
/*import bootstrap*/

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
render(){
  return(
    <div className = "container">
      <div className = "row">
      <div className='col-6'>column number one </div>
      <div className='col-6'>
        <i className ='fas fa-home'/>
       </div>
      </div>
    </div>
  );

  }
}

export default App;
