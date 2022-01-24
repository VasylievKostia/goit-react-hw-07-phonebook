
import './App.css';
import { ContactList } from './components/ContactList/ContactList.js';
import { ContactsForm } from './components/ContactsForm/ContactsForm'
import Filter  from "./components/Filter/Filter";
import { useFetchContactsQuery } from './redux/contacts/contactsSlice';
function App() {
    return (<div className="App">
        <h1>PhoneBook</h1>
      <ContactsForm/>
        <h2>Contacts</h2>
      <Filter/>
      <ContactList />
    </div>
  );
  
}
export default App
