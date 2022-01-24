import PhonebookTypes from "./Phonebook-types"
import { createAction } from "@reduxjs/toolkit"


export const addContact = createAction(PhonebookTypes.PHONEBOOK_ADD)
export const deleteContact = createAction(PhonebookTypes.PHONEBOOK_DEL)
export const filterContact = createAction(PhonebookTypes.PHONEBOOK_CHANGEFILTER)