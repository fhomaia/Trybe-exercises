import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Users from './pages/Users';
import AddClients from './pages/AddClients'
import { Route, Switch } from "react-router";


function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/users' component={Users} />
      <Route path='/add' component={AddClients} />
    </Switch>
  );
}

export default App;
