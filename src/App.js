import logo from './logo.svg';
import './App.css';
import  Great  from './componnents/Great';
import Welcome from './componnents/welcome';
import Hello from './componnents/Hello';
import { Component } from 'react';

class App extends Component {
 render(){
  return (
    <div className="App">
     <Great name='Bruce'/>
     <Great name='Emma' />
     <Great name='Ian'/>
     {/* <Welcome /> 
     <Hello /> */}

    </div>
  );
};
};
export default App;

