import { ACTIVATE_TAB } from './menu.actions'

const initialState = {
  activeTab: 0
}

export const menu = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE_TAB:
      return {
        ...state,
        activeTab: action.payload
      }
    default:
      return state
  }
}
