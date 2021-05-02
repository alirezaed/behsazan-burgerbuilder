import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import OrderList from './containers/OrderList/OrderList';
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
          <Route path='/' component={BurgerBuilder} />  
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
