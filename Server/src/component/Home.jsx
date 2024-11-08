import React,{ useState, useEffect } from 'react'
import Create from './Create'
import axios from  'axios'
import { IoTrashBinSharp } from "react-icons/io5";

const Home = () => {
    const [todos, setTodos] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3000/get')
        .then(res => {
            // location.reload()
            setTodos(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    const HandleDelete = (id) => {
        axios.delete(`http://localhost:3000/delete/${id}`)
        .then(res => {
            location.reload()
        })
        .catch(err => {
            console.log(err)
        })
    }

  return (
    <div className='flex flex-col items-center gap-5'>
        <h2 className='text-3xl underline tracking-wider font-bold'>Todo List</h2>
        <Create/>

        {
            todos.length === 0 ? <h3 className='text-xl'>No Task here</h3> :
            todos.map(todo => (
                <div className='text-xl flex items-center w-[350px] justify-between bg-transparent border-2 border-white px-2 py-5 mt-2 rounded-xl'>
                    {todo.task}
                    <IoTrashBinSharp className='cursor-pointer ' onClick={() => HandleDelete(todo._id)}/>
                </div>
                
            ))
        }

    </div>
  )
}

export default Home
