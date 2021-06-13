import React from 'react';
import Layout from './components/Layout/Layout';
import {AppProvider} from './context/ApplicationContext';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Loading from './components/UI/Loading/Loading';
import routes from './tools/routes';
import thunk from 'redux-thunk';
import axios from './tools/fetch';

const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument({ axios }))
);

function App() {
  return (
    <AppProvider>
        <Provider store={store}>
          <React.Suspense fallback={<Loading />}>
            <Router>
              <Layout>
                <Switch>
                  {routes.map(item=><Route key={item.path} path={item.path} component={item.Component} />  )}
                </Switch>
              </Layout>
            </Router>
          </React.Suspense>
        </Provider>
    </AppProvider>
  );
  }

export default App;
