import {
  SET_LOCATION_NAME,
  SET_COUNTRY,
  SET_CURRENT_WEATHER,
  SET_FORECASTED_WEATHER
} from './forecast.actions'

const forecastedWeatherItem = {
  celcius: 0,
  fahrenheit: 30,
  conditionText: '',
  conditionIcon: '',
  day: ''
}

const initialState = {
  locationName: '',
  country: '',
  currentWeather: {
    celcius: 0,
    fahrenheit: 30,
    conditionText: '',
    conditionIcon: ''
  },
  forecastedWeather: [
    forecastedWeatherItem,
    forecastedWeatherItem,
    forecastedWeatherItem
  ]
}

export const forecast = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION_NAME:
      return {
        ...state,
        locationName: action.payload
      }
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload
      }
    case SET_CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: {
          ...action.payload
        }
      }
    case SET_FORECASTED_WEATHER:
      return {
        ...state,
        forecastedWeather: [
          ...action.payload
        ]
      }
    default:
      return state
  }
}
