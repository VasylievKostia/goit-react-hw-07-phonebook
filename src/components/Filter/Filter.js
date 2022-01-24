import s from './Filter.module.css'

import React, { useCallback } from "react";
import { useDispatch,useSelector } from "react-redux";

import { getFilter } from "../../redux/Phonebook/Phonebook-selectors";
import { filterContact } from "../../redux/Phonebook/Phonebook-actions";


export function Filter() {
  const value = useSelector(getFilter)
  const dispatch = useDispatch()

  const changeFilter = useCallback((e) => {
    dispatch(filterContact(e.currentTarget.value))
  },
  [dispatch])

  return  <div className={s.section}>
          <label >Find contacts by name</label>
            <br/>
          <input
            type="text"
            value={value}
            onChange={changeFilter}
            ></input> 
          </div>
}

export default Filter