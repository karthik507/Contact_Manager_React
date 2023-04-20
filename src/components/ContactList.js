import React from 'react'
import ContactCard from './ContactCard'

const ContactList =(props)=>{
    console.log(props)

    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };
    const renderContactList=props.contacts.map((contacts)=>{
        return(
            <ContactCard contact={contacts} clickHandler={deleteContactHandler} key={contacts.id}/>
        )

    })
    return(
        <div className='main'>
            <hr></hr>
            {renderContactList}
        </div>

    )
}
export default ContactList;