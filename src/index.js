import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'

import './index.css'

//Middleware:
import { Route, Router, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import createLogger from 'redux-logger'
//import thunk from 'redux-thunk'

//Redux components:
import MainContainer from './containers/main_container'
import PostList from './components/post_list'
import PostDetails from './components/post_details'
import CreatePostForm from './components/create_post_form'


import rootReducer from './reducers'


const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, routerMiddleware(browserHistory)))
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store} >
    <Router history={history} >
      <Route path='/' component={MainContainer}  >
        <IndexRoute component={PostList} />
        <Route path="create-post" component={CreatePostForm} />
        <Route path="posts/:id" component={PostDetails} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
