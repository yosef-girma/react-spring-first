import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateEmployee from './components/CreateEmployee';

function App() {
  return (

    <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route path="/add-employee" component={CreateEmployee}></Route>
          </Switch>
        </div>
        <FooterComponent />
     
    </Router>

  );
}

export default App;
