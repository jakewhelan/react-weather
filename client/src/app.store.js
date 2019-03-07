import { createStore, combineReducers } from 'redux'
import { header } from '@header/header.reducer'
import { menu } from '@menu/menu.reducer'
import { forecast } from '@forecast/forecast.reducer'

const reducers = {
  header,
  menu,
  forecast
}

export const store = createStore(combineReducers(reducers))
export const { dispatch } = store

window.getState = store.getState
