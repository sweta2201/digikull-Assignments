import React from 'react'
import './App.css';
import Header from './Component/Header';
import Mounting from './Component/Mounting';
import Updating from './Component/Updating';
import Unmounting from './Component/Unmounting';

import {BrowserRouter,Route,Switch} from 'react-router-dom'

class App extends React.Component{
  constructor(){
    super()
    
  }
  render(){
      return(
        <div className='App'>
         
            <BrowserRouter>
                <Header/>
              <Switch>
                <Route exact path = '/mounting' component={Mounting}/>
                <Route exact path = '/updating' component={Updating}/>
                <Route exact path = '/unmounting' component={Unmounting}/>
              </Switch>
            </BrowserRouter>

        </div>
      )
  }


}

export default App;
