"use client"
import React, { useEffect, useState } from 'react'
import SubElement from '@/components/adminComponent/SubElement'
import axios from 'axios';
function page() {
  const [emails, setEmails] = useState([]);
  const fetchData = async () => {
    const resp = await axios.get('/api/email');
    if (resp.data.success) {
      setEmails(resp.data.emails)
    } else {
      console.log("Something went Wrong in fetching the details")
    }

  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className='mt-4 ml-10'>
      <h2>All Subscribers</h2>
      <div className='border border-black max-w-[850px] min-w-[400x] h-[80vh] overflow-x-auto'>
        <table className='w-full'>
          <thead className='uppercase bg-slate-200 text-slate-800'>
            <tr>
              <th scope='col' className='px-4 py-2'>Email</th>
              <th scope='col' className=' hidden sm:block px-4 py-2'>Date</th>
              <th scope='col' className='px-4 py-2'>Action</th>

            </tr>
          </thead>
          <tbody>
            {
              emails.map((item, index) => {
                return <SubElement key={index} id1={item._id} fetchData={fetchData} email={item.email} date={item.date} />
              })
            }

          </tbody>

        </table>
      </div>
    </div>
  )
}

export default page
