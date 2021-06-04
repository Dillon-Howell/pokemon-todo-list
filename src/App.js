import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {UserProfile} from './pages/UserProfile'
import {Header} from './components/Header'
import { Fragment } from 'react';
import "./App.css";

function App() {
  return (
    <Fragment>

    <Router>
    <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/user" component={UserProfile}/>
        <Route exact path="/about" component={About}/>
      </Switch>
    </Router>
    </Fragment>
  );
}

export default App;
