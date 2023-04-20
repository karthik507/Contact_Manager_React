import React from 'react'
import user from '../images/user.png'
const ContactCard=(props)=>{
    const {id,name,email}=props.contact;
    return(
        <div className='item'>
            <img className='image' src={user} alt='user'></img>
            <div className='content'>
                <div className='header'>{name}</div>
                <div>{email}</div>
            </div>
                <i class="fa-solid fa-trash" style={{color:"red"}}
                onClick={()=>props.clickHandler(id)}
                >
                </i>
                <hr></hr>
        </div>
    )
}
export default ContactCard;