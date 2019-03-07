import { TemperatureUnits } from '@forecast/forecast.helpers'
import { TOGGLE_TEMPERATURE_UNIT } from './header.actions'

const initialState = {
  selectedTemperatureUnit: TemperatureUnits.CELCIUS,
  isTemperatureSwitchChecked: false
}

export const header = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TEMPERATURE_UNIT: {
      const isChecked = !state.isTemperatureSwitchChecked
      return {
        ...state,
        isTemperatureSwitchChecked: isChecked,
        selectedTemperatureUnit: isChecked
          ? TemperatureUnits.FAHRENHEIT
          : TemperatureUnits.CELCIUS
      }
    }
    default:
      return state
  }
}
