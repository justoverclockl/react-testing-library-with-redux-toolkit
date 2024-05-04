import counterReducer from "../redux/counterSlice"
import {combineReducers, configureStore} from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    counter: counterReducer
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer,
    })
}
