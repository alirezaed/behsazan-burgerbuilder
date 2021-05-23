import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import OrderList from './containers/OrderList/OrderList';
import Signup from './containers/Signup/Signup';
import Login from './containers/Login/Login';
import Timer from './containers/VirtualDOM/Timer';
import AccessDenied from './containers/AccessDenied/AccessDenied';
import Order from './containers/Order/Order';
import {AppProvider} from './context/ApplicationContext';
import {AuthenticationProvider} from './context/AuthenticationContext';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const store = createStore(reducer);

function App() {
  return (
    <AppProvider>
      <AuthenticationProvider>
        <Provider store={store}>
          <Router>
            <Layout>
              <Switch>
                <Route path='/OrderList' component={OrderList} />  
                <Route path='/Order/:id' component={Order} />  
                <Route path='/Signup' component={Signup} />  
                <Route path='/Login' component={Login} />  
                <Route path='/AccessDenied' component={AccessDenied} />  
                <Route path='/Timer' component={Timer} />  
                <Route path='/' component={BurgerBuilder} />  
              </Switch>
            </Layout>
          </Router>
        </Provider>
      </AuthenticationProvider>
    </AppProvider>
  );
  }

export default App;
