import { combineReducers } from "redux"
// import { addContact, deleteContact } from "./Phonebook-actions";
import { createReducer } from "@reduxjs/toolkit";
// import store from "../store"
// import types from "./Phonebook-types"

const initialContctsState = [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        
    ]
;

const contacts = createReducer(initialContctsState, {
    'phonebook/add': (state, { payload }) => {
        // console.log('add in reduser:' ,payload)
        return [...state, payload]
    },
    'phonebook/del': (state, { payload }) => {
        // console.log("delete payload in reduser", payload)
        return state.filter(contact => contact.id !== payload)
    }
})

const filter = createReducer('', {
    'phonebook/filter': (state, { payload }) => {
        // console.log('filter reduser payload:', payload)
        return payload
    }
})

export default combineReducers({
        contacts,
        filter
    })

    // const contacts = (state = initialContctsState, {type, payload}) => {
    //    switch (type) {
    //        case types.PHONEBOOK_ADD:
    //            return [...state, payload]
           
    //        case types.PHONEBOOK_DEL:
    //            return state.filter(contact => contact.id !== payload)
    //         default:
    //     return state
    //     };}
    
    
    // const filter = (state = '', {payload}) => {
    //         return payload
    //     };
        // export default combineReducers();




