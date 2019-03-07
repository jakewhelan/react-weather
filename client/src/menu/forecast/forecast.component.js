import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import CircularProgress from '@material-ui/core/CircularProgress'

import './forecast.component.scss'
import { forecastStyles } from './forecast.styles'
import { forecastActions } from './forecast.actions'
import { TemperatureUnitIndicators } from './forecast.helpers'

class ForecastComponent extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired
  }
  static mapStateToProps = ({
    header: {
      selectedTemperatureUnit
    },
    forecast: {
      locationName,
      country,
      currentWeather,
      forecastedWeather
    }
  }) => ({
    selectedTemperatureUnit,
    locationName,
    country,
    currentWeather,
    forecastedWeather
  })

  state = {
    resolved: false
  }

  componentDidMount () {
    this.getData()
  }

  /**
   * @returns {String} temperature indicator: f or c
   */
  get temperatureUnitIndicator () {
    return TemperatureUnitIndicators[this.props.selectedTemperatureUnit]
  }

  /**
   * Fetch weather forecast from react-weather REST API and
   * set in store, once complete flag component as resolved
   * and begin render
   * @method getData
   */
  async getData () {
    const { fetch } = window
    const [data] = await fetch(`http://localhost:3000/api/weather/${this.props.locale}/3`)
      .then(response => response.json())
      .then(({ data }) => data)

    const {
      name: locationName,
      country,
      now: currentWeather,
      forecast: forecastedWeatherList
    } = data

    forecastActions.setLocationName({ locationName })
    forecastActions.setCountry({ country })
    forecastActions.setCurrentWeather({ currentWeather })
    forecastActions.setForecastedWeather({ forecastedWeatherList })

    this.setState({ resolved: true })
  }

  render () {
    const { classes } = this.props

    if (!this.state.resolved) {
      return (
        <Card className={classes.card}>
          <CircularProgress className={classes.progress} />
        </Card>
      )
    }

    const primary = () => {
      const { locationName, country, currentWeather } = this.props
      const {
        conditionText,
        conditionIcon,
        [this.props.selectedTemperatureUnit]: temperature
      } = currentWeather

      return (
        <CardContent className={classes.now}>
          <div className={classes.heroText}>
            <Typography
              variant='h2'
              color='inherit'
              noWrap
            >
              {locationName}
            </Typography>
            <Typography
              variant='h5'
              color='inherit'
            >
              {country}
            </Typography>
            <Typography
              variant='h1'
              color='inherit'
              noWrap
            >
              {temperature}{this.temperatureUnitIndicator}
            </Typography>
            <Typography
              variant='h4'
              color='inherit'
              noWrap
            >
              {conditionText}
            </Typography>
          </div>
          <CardMedia
            className={`${classes.hero} weather-image`}
            image={conditionIcon.replace('64x64', '128x128')}
            title={conditionText}
          />
        </CardContent>
      )
    }

    const forecast = index => {
      const { forecastedWeather } = this.props
      const {
        conditionText,
        conditionIcon,
        day,
        [this.props.selectedTemperatureUnit]: temperature
      } = forecastedWeather[index]
      const dayText = index === 0
        ? 'Today'
        : day

      return (
        <Card className={classes.content}>
          <div className={classes.details}>
            <CardContent>
              <Typography
                variant='h4'
                color='inherit'
                noWrap
              >
                {dayText}
              </Typography>
              <Typography
                variant='h6'
                color='inherit'
                noWrap
              >
                {temperature}{this.temperatureUnitIndicator}
              </Typography>
              <Typography
                variant='caption'
                color='inherit'
                noWrap
              >
                {conditionText}
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={`${classes.cover} weather-image`}
            image={conditionIcon.replace('64x64', '128x128')}
            title={conditionText}
          />
        </Card>
      )
    }

    return (
      <Card className={classes.card}>
        <div className={classes.wrapper}>
          {primary()}
          <Divider
            className={classes.divider}
            variant='middle'
          />
          <div className={classes.container}>
            {forecast(0)}
            {forecast(1)}
            {forecast(2)}
          </div>
        </div>
      </Card>
    )
  }
}

export const Forecast = connect(ForecastComponent.mapStateToProps)(withStyles(forecastStyles)(ForecastComponent))
