 import './App.css';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Details from './Detials/Details';

function App() {
  return (
    
    <Router>
          <li>
              <Link to="/home">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

                <Switch>
                
                <Route path="/about">
                        <About></About>
                    </Route>
                    <Route path="/home">
                      <Home/> 
                    </Route>
                    
                    <Route path="/post/:id">
                    <Details></Details>
                    </Route>
                    <Route path="/">
                      <Home/> 
                    </Route>
                </Switch>
            </Router>
     
  );
}

export default App;
