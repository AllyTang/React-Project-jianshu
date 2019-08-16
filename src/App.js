import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
import { GlobalStyle } from './style';
import { GlobalStyleFont } from './statics/iconfont/iconfont';
import store from './store';




function App() {
  return (
      <Provider store={store}>
          <React.Fragment>
            <GlobalStyle />
            <GlobalStyleFont />

              <BrowserRouter>
                  <div>
                      <Header/>
                      <Route path='/login' exact component={Login}></Route>
                      <Route path='/write' exact component={Write}></Route>
                      <Route path='/' exact component={Home}></Route>
                      <Route path='/detail/:id' exact component={Detail}></Route>
                  </div>
              </BrowserRouter>
          </React.Fragment>
      </Provider>
  );
}

export default App;
