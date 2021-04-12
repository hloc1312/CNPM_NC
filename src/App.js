import './App.css';
import React from 'react';
import Header from './components/common/Header';
import Navigation from './components/common/Navigation';
import listVoucher from './components/Page/listVoucher';
import Detail from './components/common/Detail'
import {Switch,Route} from 'react-router-dom'
import listPayMent from './components/Page/listPayMent';
function App() {
  return (
    <div>
        <Header/>
        <Navigation/> 
        <Switch>
            <Route path='/' component={listVoucher} exact />  
            <Route path='/detail' component={Detail}/>
            <Route path='/payment' component={listPayMent}/>
        </Switch>

        <div style={{height:'1000px'}}></div>
    </div>
  );
}

export default App;
