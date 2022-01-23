import { useState } from "react";
import { useDispatch } from "react-redux";
// import { connect } from 'react-redux'
import { getContacts } from "../../redux/Phonebook/Contacts";
import { addContact } from "../../redux/Phonebook/Phonebook-actions";
import shortid from 'shortid';
import s from '../ContactsForm/ContactsForm.module.css'
import { useSelector } from "react-redux";

import Notify from 'simple-notify'
import 'simple-notify/dist/simple-notify.min.css'

export function ContactsForm() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate()

  // const contacts = useSelector(getContacts)
  // console.log(contacts)

  // ====== REDUX==========
  const dispatch = useDispatch()
  // ====== REDUX==========
  const  handleChangeInput = event => {
     setName(event.currentTarget.value)
  }
  const handleChangeNumber = event => {
      setNumber(event.currentTarget.value)
  }
  const handleSubmit = event => {
    event.preventDefault()
    
  //   const obj = {
  //     id: shortid.generate(),
  //     name: name,
  //     number: number
  //   }
  //   if (!contacts.find((contact) => contact.name === name)) {
  //     dispatch(addContact(obj))
  //     // console.log( 'add in ContactForm', dispatch(addContact(obj)))
      
  //     resetState()
  //   }
  //   else {
  //   new Notify({
  //   status: 'error',
  //   text: `Name "${name}" is already in contacts`,
  //   effect: 'slide',
  //   type: 3
  // })
  //   }
   
    }
    const resetState = () => {
      setNumber('')
      setName('')
    }
  
  
    return <section className={s.section}>
    <form className={s.form}
      onSubmit={/*handleSubmit*/ ()=>{}}
    >
            
    <div className={s.inputWrapper}>
    <label htmlFor={nameInputId}> Name
      <input className={s.input}
      id={nameInputId}
      type="text"
      name="name"
      value={name}
      onChange={/*handleChangeInput*/ ()=>{}}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required/>
      </label>
        </div>
        
      <div className={s.inputWrapper}>
      <label htmlFor={numberInputId}>Number
      <input className={s.input}
        id={numberInputId}
        value={number}
        type="tel"
        name="number"
  onChange={/*handleChangeNumber*/ ()=>{}}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        /></label>
      </div>
      <button type='submit' className={s.button}> Add Contact</button>
        </form>
        </section>
    
}

// const mapDispatchToProps = dispatch => ({
//   onFormSubmit: (obj) => dispatch (PhonebookActions.addNewContact(obj))
// })

// export default connect(null,mapDispatchToProps)(ContactsForm)