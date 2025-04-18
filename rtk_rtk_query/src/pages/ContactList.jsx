import React from 'react'
import { useDeleteContactMutation, useGetContactsQuery } from '../features/contacts/contactsApi'


const ContactList = () => {
  const {data,isLoading,isError}=useGetContactsQuery()
  console.log(data)
  const [deleteContact]=useDeleteContactMutation()

  return (
    <div className='container'>
        <h1 className='my-2 text-center'>UserList</h1>
        <div className="row gy-3">
            {
                data?.map((ele)=>(
                 <div className="col-sm-12 col-lg-3 col-md-3">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">{ele.name}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{ele.username}</h6>
                            <p className="card-text">{ele.email}</p>
                            <button className='btn btn-danger' onClick={()=>deleteContact(ele.id)}>delete</button>
                        </div>
                    </div>
                 </div>
                ))
            }
        </div>
      
    </div>
  )
}

export default ContactList
