import { dispatch } from '@app/app.store'

export const TOGGLE_TEMPERATURE_UNIT = '[header] TOGGLE_TEMPERATURE_UNIT'

export const headerActions = {
  /**
   * Toggles temperature unit between celcius and fahrenheit
   * @method toggleTemperatureUnit
   */
  toggleTemperatureUnit: () => dispatch({ type: TOGGLE_TEMPERATURE_UNIT })
}
