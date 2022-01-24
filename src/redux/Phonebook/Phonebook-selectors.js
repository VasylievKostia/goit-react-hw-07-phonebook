export const getContacts = state => state.phonebook.contacts
export const getFilter = state => {
    return state.rootReducer.phonebook.filter
}