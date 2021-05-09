import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import OrderList from './containers/OrderList/OrderList';
import Signup from './containers/Signup/Signup';
import Login from './containers/Login/Login';
import Timer from './containers/VirtualDOM/Timer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/OrderList' component={OrderList} />  
          <Route path='/Signup' component={Signup} />  
          <Route path='/Login' component={Login} />  
          <Route path='/Timer' component={Timer} />  
          <Route path='/' component={BurgerBuilder} />  
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
