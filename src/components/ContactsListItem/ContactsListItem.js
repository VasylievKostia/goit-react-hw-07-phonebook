import s from "../ContactsListItem/ContactsListItem.module.css"

import { useDeleteContactMutation } from "../../redux/contacts/contactsSlice"

import Notify from 'simple-notify'
import 'simple-notify/dist/simple-notify.min.css'

export function ContactListItem({id ,el}) {
    const [onDelete, {isLoading : isDeleting}] = useDeleteContactMutation()
    const handleDelete = (id) => {
        onDelete(id)
        new Notify({
            status: 'warning',
            text: `Contact has been deleted`,
            effect: 'slide',
            type: 3,
            autoclose: 2000,
          })
    }


    return   <li className={s.item} key={id}>{el.name}: {el.phone}
            <button
                type="button"
                id={id}
                onClick={() => handleDelete(el.id)}
                disabled={isDeleting}
                >Delete</button>
            </li>
}