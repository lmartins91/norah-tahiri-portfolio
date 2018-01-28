import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'

import { About, Home } from './components'
import { Menu, Project, Projects } from './containers'
import rootReducer from './reducers'
import './styles/index.css'

let store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
)

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <div>
                <Menu />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/design" component={Projects} />
                <Route path="/design/:projectId" component={Project} />
                <Route exact path="/photography" component={Projects} />
                <Route path="/photography/:projectId" component={Project} />
            </div>
        </Provider>
    </Router>,
    document.getElementById('root')
)