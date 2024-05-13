import axios from 'axios'
import React from 'react'
import {BiEditAlt} from 'react-icons/bi'
import {BsTrash} from 'react-icons/bs'
import { baseURL } from '../utils/constant.js'

const List= ({id , task , setUpdateUI ,updateMode })=> {
    const removeTask = ()=>{
        axios.delete(`${baseURL}/delete/${id}`).then((res)=>{
            console.log(res);
            setUpdateUI((prev)=> !prev)
        })
    }
  return (
    <li>
        {task}
        <div className='icon_holder'>
            <BiEditAlt className='icon' onClick={() => updateMode(id , task)}/>
            <BsTrash className='icon' onClick={removeTask}/>
        </div>

    </li>
  )
}

export default List