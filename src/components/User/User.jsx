import React from 'react'
import '../User/User.css'
import { FaUserCircle } from "react-icons/fa";
import { BsGiftFill } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

const User = ({user}) => {
    return (
        <div className='User'>
            <div className='user__icon'>
                <FaUserCircle />
            </div>
            <div className='user__info'>
                <h2>{`${user.first_name} ${user.last_name}`}</h2>
                <h4>{`${user.email}`}</h4>
            </div>
            <hr />
            <div className='user__birth'>
                <BsGiftFill />
                <h4>{`${user.birthday}`}</h4>
            </div>
            <hr />
            <div className='user__buttons'>
                <button className='user__buttons__delete'> <AiOutlineDelete /> </button>
                <button className='user__buttons__edit'> <FiEdit2 /> </button>
            </div>



        </div>
    )
}

export default User
