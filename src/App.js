import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './frontend-js/homePage'
import Projects from './frontend-js/projects'
import ErrorPage from './frontend-js/errorPage'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route path='/projects' component={Projects}/>
          <Route path='*' component={ErrorPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
