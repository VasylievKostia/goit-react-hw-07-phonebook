import { useSelector } from "react-redux"
import s from "../ContactList/ContactList.module.css"
import { getContacts, getFilter } from "../../redux/Phonebook/Contacts"
// import store from "../../redux/store"
import { useDispatch } from "react-redux"
// import { deleteContact } from "../../redux/Phonebook/Phonebook-actions"

export function ContactList() {
    // const contacts = useSelector(getContacts)
    // const filter = useSelector(getFilter)
    const dispatch = useDispatch()

    const onDeleteContact = (e) => {
        // dispatch(deleteContact(e.target.id))
    }
    const filteredContacts = () => {
        // return contacts.filter((contact) =>
        // contact.name.toLowerCase().includes(filter.toLowerCase())
    // )
    }    

        return <section className={s.section}>
            
        {/* <ul className={s.list}>
            {filteredContacts().map((el) =>
                <li className={s.item} key={el.id}>{el.name}: {el.number}
                    <button
                        type="button"
                        id={el.id}
                        onClick={onDeleteContact}
                    >Delete</button>
                </li>
        )}
    </ul> */}
    </section>
}
