import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Clubs from './components/pages/Clubs.js';
import Events from './components/pages/Events.js';
import AboutUs from './components/pages/AboutUs.js';
import Organize from './components/pages/Organize.js';
import Test from './components/pages/Test.js';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min.js';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
        <Route path='/' exact component={Home} />
          <Route path='/Clubs' component={Clubs} />
          <Route path='/Events' component={Events} />
          <Route path='/AboutUs' component={AboutUs} />
          <Route path='/Organize' component={Organize}/>
          <Route path='/Test' component={Test}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
