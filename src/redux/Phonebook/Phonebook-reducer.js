import { combineReducers } from "redux"
import { createReducer } from "@reduxjs/toolkit";


const filter = createReducer('', {
    'phonebook/filter': (state, { payload }) => {
        return payload
    }
})


export default combineReducers({
        filter
    })

