import React from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
function SubElement({ email, date, id1, fetchData }) {
    const newDate = new Date(date);
    const handleClick = async (e) => {
        e.preventDefault();
        const resp = await axios.delete('/api/email', {
            params: {
                id: id1
            }
        })
        if (resp.data.success) {
            toast.success(resp.data.msg);
            fetchData();
        } else {
            toast.error(resp.data.msg);

        }
    }
    return (

        <tr className='mt-2 border-b '>
            <th scope='row ' className=' px-4 py-2 font-semibold'>{email ? email : "no email"}</th>
            <th scope='row ' className='hidden  sm:block px-4 py-2 font-semibold'>{date ? newDate.toDateString() : "no Date"}</th>
            <th scope='row' className='px-4 py-2 font-semibold'><button onClick={(e) => handleClick(e)} className='  border border-black bg-white text-black px-4 py-2 rounded-lg'>Delete</button></th>
        </tr>
    )
}

export default SubElement
