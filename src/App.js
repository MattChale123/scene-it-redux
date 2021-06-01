import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import { Navbar } from 'react-bootstrap';
import Username from './components/Username';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar>
          <Link to='/'>Home</Link><br></br>
          <Link to='/watchlist'>Watchlist</Link><br />
          <Link to='/username'>Username</Link>
        </Navbar>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/watchlist'>
            <Watchlist />
          </Route>
          <Route path='/username'>
            <Username />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

