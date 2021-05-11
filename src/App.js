import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import OrderList from './containers/OrderList/OrderList';
import Signup from './containers/Signup/Signup';
import Login from './containers/Login/Login';
import Timer from './containers/VirtualDOM/Timer';
import {AppProvider} from './context/ApplicationContext';
import {AuthenticationProvider} from './context/AuthenticationContext';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <AppProvider value={{theme:'light',lang:'en'}}>
      <AuthenticationProvider>
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
      </AuthenticationProvider>
    </AppProvider>
  );
  }

export default App;
