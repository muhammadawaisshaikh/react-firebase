import React from 'react';
import './App.css';

import Header from './layout/Header';
import AddItem from './components/AddItem';
import AllItems from './components/AllItems';
import Detail from './components/Detail';

import { 
  BrowserRouter as Router, 
  Route,
  Switch   
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          
          {/* all components */} 
          <div>
            <Switch>
              <Route exact path='/react-firebase' component={AllItems}></Route>
              <Route exact path='/react-firebase/addItem' component={AddItem}></Route>
              <Route exact path='/react-firebase/allItems' component={AllItems}></Route>
              <Route exact path='/react-firebase/detail' component={Detail}></Route>
            </Switch>
          </div>
          
      </div>
    </Router>
  );
}

export default App;
