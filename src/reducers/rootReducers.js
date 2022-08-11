import { uiReducer } from "./uiReducer";
import { combineReducers } from 'redux'
import { calendarReducer } from "./calendarReducer";
import { authReducer } from "./authReducer";



//combinacion de reducers


export const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    calendar: calendarReducer
})