import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

import './header.component.scss'
import { headerStyles } from './header.styles'
import { headerActions } from './header.actions'

class HeaderComponent extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }
  static mapStateToProps = ({
    header: {
      isTemperatureSwitchChecked,
      selectedTemperatureUnit
    }
  }) => ({
    isTemperatureSwitchChecked,
    selectedTemperatureUnit
  })

  /**
   * Click event handler for Material UI Switch element,
   * toggles temperature unit between celcius and fahrenheit
   * @method onTemperatureToggle
   */
  onTemperatureToggle () {
    headerActions.toggleTemperatureUnit()
  }

  render () {
    const {
      classes,
      isTemperatureSwitchChecked,
      selectedTemperatureUnit
    } = this.props

    return (
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            color='inherit'
            noWrap
          >
            react-weather
          </Typography>
          <div className={classes.grow} />
          <FormGroup>
            <FormControlLabel
              className='label-override'
              control={
                <Switch
                  checked={isTemperatureSwitchChecked}
                  onChange={this.onTemperatureToggle}
                  aria-label='TemperatureSwitch'
                  color='secondary'
                />
              }
              label={selectedTemperatureUnit}
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
    )
  }
}

export const Header = connect(HeaderComponent.mapStateToProps)(withStyles(headerStyles)(HeaderComponent))
