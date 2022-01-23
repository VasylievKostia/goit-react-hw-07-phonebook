import PhonebookTypes from "./Phonebook-types"
import { createAction } from "@reduxjs/toolkit"
// import shortid from "shortid"


export const addContact = createAction(PhonebookTypes.PHONEBOOK_ADD)
export const deleteContact = createAction(PhonebookTypes.PHONEBOOK_DEL)
export const filterContact = createAction(PhonebookTypes.PHONEBOOK_CHANGEFILTER)

// export default { addContact, deleteContact, filterContact }

// export const addContact = (obj) => ({
//      type: PhonebookTypes.PHONEBOOK_ADD,
//      payload: {
//        id: shortid.generate(),
//        name: obj.name,
//        number: obj.number
//      },
//  })
 
// export const deleteContact = (id) => ({
//   type: PhonebookTypes.PHONEBOOK_DEL,
//   payload: id
// }) 

// export const filterContact = (value) => ({
//   type: PhonebookTypes.PHONEBOOK_CHANGEFILTER,
//   payload: value
// })
