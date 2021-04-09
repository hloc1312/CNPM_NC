import './App.css';
import React from 'react';
import Header from './components/common/Header';
import Navigation from './components/common/Navigation';
import Slider from './components/common/Slider';
import Search from './components/common/Search';
import {Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div>
        <Header/>
        <Navigation/>
        <Slider/>
        <Search/>
        <Switch>
            <Route path='/header' component={Search} exact/>    
        </Switch>

        <div style={{height:'1000px'}}></div>
    </div>
  );
}

export default App;
