import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import { menuStyles } from './menu.styles'
import { menuActions } from './menu.actions'
import { Forecast } from './forecast/forecast.component'

class MenuComponent extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };
  static mapStateToProps = ({ menu: { activeTab } }) => ({ activeTab })

  constructor () {
    super()
    this.tabOnClick = this.tabOnClick.bind(this)
  }

  /**
   * Click event handler for Material UI Tabs component
   * @method tabOnClick
   * @param {Event} _
   * @param {Number} tabId id of tab which recieved click event
   */
  tabOnClick (_, tabId) {
    menuActions.activateTab({ tabId })
  }

  render () {
    const { classes, activeTab } = this.props

    return (
      <React.Fragment>
        <Paper
          className={classes.paper}
          square
        >
          <Tabs
            className={classes.menu}
            value={activeTab}
            onChange={this.tabOnClick}
            indicatorColor='primary'
            textColor='primary'
            centered
          >
            <Tab label='Dublin' />
            <Tab label='London' />
            <Tab label='New York' />
          </Tabs>
        </Paper>
        {activeTab === 0 && <Forecast locale='dublin' />}
        {activeTab === 1 && <Forecast locale='london' />}
        {activeTab === 2 && <Forecast locale='new york' />}
      </React.Fragment>
    )
  }
}

export const Menu = connect(MenuComponent.mapStateToProps)(withStyles(menuStyles)(MenuComponent))
