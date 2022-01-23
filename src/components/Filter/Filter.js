import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFilter } from "../../redux/Phonebook/Contacts";
import { filterContact } from "../../redux/Phonebook/Phonebook-actions";
import s from './Filter.module.css'
export function Filter() {
  // const value = useSelector(getFilter)

  // const dispatch = useDispatch()
  const changeFilter = useCallback( (e) => {
    // dispatch(filterContact(e.currentTarget.value))
  },
  [/*dispatch*/])

  return <div className={s.section}>
     <label >Find contacts by name</label>
        <br/>
    <input
      
      type="text"
      value={/*value*/ 123}
      onChange={changeFilter}
      ></input> 
  </div>
  
}




// const Filter = ({ value, changeFilter }) => (
//   <>
//         <label >Find contacts by name</label>
//         <br/>
//     <input
      
//       type="text"
//       value={value}
//       onChange={changeFilter}
//     ></input>
//   </>
// );
export default Filter