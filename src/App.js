import Login from './Page/Login/Login';
import UserLists from './Page/UserLists/UserLists';
import Error from './Page/404/Error';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Style.scss';

function App() {
return (

    <Router>
        <Switch>
          <Route path={["/"]} exact key="Login" component={Login}/>
          <Route path={["/users"]} exact key="UserLists" component={UserLists}/>
          <Route component={Error}/>
        </Switch>
    </Router>
      
);
}

export default App;