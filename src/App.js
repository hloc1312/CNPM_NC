import './App.css';
import React from 'react';
import Header from './components/common/Header';
import Navigation from './components/common/Navigation';
import listVoucher from './components/Page/listVoucher';
import  ManagerVoucher from './components/common/ManagerVoucher';
import Detail from './components/common/Detail'
import {Switch,Route, Router} from 'react-router-dom'
function App() {
  return (
    <div>
        <Header/>
        <Navigation/> 
        <Switch>
            <Route path='/detail' component={Detail}/>
            <Route path='/' component={listVoucher} exact />    
        </Switch>

        <div style={{height:'1000px'}}></div>
    </div>
  );
}

export default App;
