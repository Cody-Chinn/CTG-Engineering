import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';
import Mixing from './Components/Mixing';
import Production from './Components/Production';
import CustomNavBar from './Components/CustomNavBar';


function App() {
  return (
    <Router>
      <div>
        <CustomNavBar />
        <Route exact path = '/' component={ Home }/>
        <Route exact path = '/mixing' component={ Mixing }/>
        <Route exact path = '/production' component={ Production }/>
      </div>
    </Router>
  );
}

export default App;
