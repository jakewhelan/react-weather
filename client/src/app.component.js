import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './app.store'

import CssBaseline from '@material-ui/core/CssBaseline'

import { Header } from './header/header.component'
import { Menu } from './menu/menu.component'
import './app.component.scss'

if (module.hot) {
  module.hot.accept()
}

class AppComponent extends Component {
  render () {
    return (
      <weather-app>
        <CssBaseline />
        <Header />
        <Menu />
      </weather-app>
    )
  }
}

const App = AppComponent

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'))
