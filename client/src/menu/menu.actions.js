import { dispatch } from '@app/app.store'

export const ACTIVATE_TAB = '[menu] ACTIVATE_TAB'

export const menuActions = {
  /**
   * @method activateTab
   * @param {Number} tabId id of tab which should be activated
   */
  activateTab: ({ tabId = 0 }) => dispatch({ type: ACTIVATE_TAB, payload: tabId })
}
