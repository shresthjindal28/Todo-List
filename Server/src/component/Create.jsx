import React,{ useState} from 'react'
import axios from  'axios'
import { IoIosAddCircle } from "react-icons/io";


const Create = () => {
    const [task, setTask] = useState()

    const handleAdd = () => {
        // console.log('Add button clicked')
        axios.post('http://localhost:3000/create', {task: task})
        .then(res => {
            // console.log(res)
            location.reload()
        })
        .catch(err => {
            console.log(err)
        })
    }
return (
    <div className='flex flex-row gap-10 items-center mt-5'>
        <input className='w-[50vw] p-4 border-2 outline-none rounded-lg bg-transparent ' type="text" onChange={(e) => setTask(e.target.value)} placeholder='Enter Your Task' />
        <button className=' bg-transparent text-white rounded-full flex items-center justify-center'
        
        onClick={() => task && handleAdd()}
        >
            <IoIosAddCircle className='text-white cursor-pointer' size={45} />
        </button>

    </div>
)
}

export default Create
