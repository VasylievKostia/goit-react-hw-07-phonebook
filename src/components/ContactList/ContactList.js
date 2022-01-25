import { useSelector } from "react-redux"
import s from "../ContactList/ContactList.module.css"
import { getFilter } from "../../redux/Phonebook/Phonebook-selectors"
import { useFetchContactsQuery } from "../../redux/contacts/contactsSlice"
import { useEffect, useState } from "react"
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { ContactListItem } from "../ContactsListItem/ContactsListItem.js"

const override = css`
  margin: 20px 0;
  position: fixed
  width: 500px
`;

export function ContactList() {
    const filter = useSelector(getFilter)
    const { data, isFetching } = useFetchContactsQuery()
    const [loading] = useState(true);
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const filteredContacts = () => {
        return data.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
        )
    }    
    
// =========Spiner on mouseOver=========
  useEffect(() => {
    function setFromEvent(event) {
      setPosition({ x: event.pageX, y: event.pageY });
    }
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

    const style = {
        position: "absolute",
        left: position.x + 20,
        top: position.y - 20,
    };

    return <section className={s.section}>
        {isFetching &&
            <div style={style} ><ClipLoader loading={loading}
            css={override}
            size={30}
            color={"#36D7B7"}
        /></div>}      
        {data && <ul className={s.list}>
            {filteredContacts().map((el) => {
                return <ContactListItem key={el.id} el={el}/>
            } 
        )}
        </ul> }
    </section>
}
