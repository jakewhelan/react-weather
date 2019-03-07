import { dispatch } from '@app/app.store'

export const SET_LOCATION_NAME = '[forecast] SET_LOCATION_NAME'
export const SET_COUNTRY = '[forecast] SET_COUNTRY'
export const SET_CURRENT_WEATHER = '[forecast] SET_CURRENT_WEATHER'
export const SET_FORECASTED_WEATHER = '[forecast] SET_FORECASTED_WEATHER'

export const forecastActions = {
  /**
   * Reset location name to provided value
   * @method setLocationName
   * @param {String} [locationName=''] location of weather forecast
   */
  setLocationName: ({ locationName = '' }) => dispatch({ type: SET_LOCATION_NAME, payload: locationName }),

  /**
   * Reset country name to provided value
   * @method setCountry
   * @param {String} [country=''] country of weather forecast
   */
  setCountry: ({ country = '' }) => dispatch({ type: SET_COUNTRY, payload: country }),

  /**
   * @typedef {Object} CurrentWeather
   * @property {Number} [celcius=0] current temperature in celcius
   * @property {Number} [fahrenheit=30] current temperature in fahrenheit
   * @property {String} [conditionText=''] current weather condition description
   * @property {String} [conditionIcon=''] current weather condition icon
   */

  /**
   * Reset current weather data to provided value
   * @method setCurrentWeather
   * @param {CurrentWeather} currentWeather
   */
  setCurrentWeather: ({ currentWeather }) => {
    const {
      celcius = 0,
      fahrenheit = 30,
      conditionText = '',
      conditionIcon = ''
    } = currentWeather

    dispatch({ type: SET_CURRENT_WEATHER, payload: { celcius, fahrenheit, conditionText, conditionIcon } })
  },

  /**
   * @typedef {Object} ForecastedWeather
   * @property {Number} [celcius=0] forecasted temperature in celcius
   * @property {Number} [fahrenheit=30] forecasted temperature in fahrenheit
   * @property {String} [conditionText=''] forecasted weather condition description
   * @property {String} [conditionIcon=''] forecasted weather condition icon
   * @property {String} [day=''] day of the week
   */

  /**
   * Reset n day weather forecast to provided ForecastedWeather values
   * @method setForecastedWeather
   * @param {ForecastedWeather[]} [forecastedWeatherList=[]] list of weather forecasts, in ascending order (date)
   */
  setForecastedWeather: ({ forecastedWeatherList = [] }) => {
    const parsedForecast = forecastedWeatherList
      .map(({
        celcius = 0,
        fahrenheit = 30,
        conditionText = '',
        conditionIcon = '',
        day = ''
      }) => ({
        celcius,
        fahrenheit,
        conditionText,
        conditionIcon,
        day
      }))

    dispatch({ type: SET_FORECASTED_WEATHER, payload: parsedForecast })
  }
}
