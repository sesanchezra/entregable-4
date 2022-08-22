import React, { useEffect } from 'react'
import '../Form/Form.css'
import { useForm } from 'react-hook-form';
import useGet from '../../hooks/useGet';
import axios from 'axios';
import { AiOutlineClose } from "react-icons/ai";

const defaultValue = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: ''
}

const Form = ({ usePost, showModal, userUpdate, setUserUpdate }) => {

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        
        if (userUpdate) {
            reset(userUpdate)
            showModal()
        }
    }, [userUpdate])

    const closeModal = () => {
        showModal()
        setUserUpdate()
    }
    const submit = (data) => {
        if (userUpdate) {
            //Update
        }
        else {
            usePost(data)
            reset(defaultValue)
            showModal()
        }

    }

    return (
        <form className='Form' onSubmit={handleSubmit(submit)}>
            {
                userUpdate ?
                    <h2>Update user</h2>
                    :
                    <h2>New User</h2>
            }


            <a className='close__button' onClick={() => closeModal()}>
                <AiOutlineClose />
            </a>



            <div className='form__inputs'>
                <div className='input'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name' {...register('first_name')} />
                </div>
                <div className='input'>
                    <label htmlFor="last_name">Last Name:</label>
                    <input type="text" id='last_name' {...register('last_name')} />
                </div>
                <div className='input'>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id='email' {...register('email')} />
                </div>
                <div className='input'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' {...register('password')} />
                </div>
                <div className='input'>
                    <label htmlFor="birth">Birthday:</label>
                    <input type="date" id='birthday' {...register('birthday')} />
                </div>
            </div>



            <button className='form__button'>
                {
                    userUpdate ?
                        `Update User`
                        :
                        `Create User`
                }
            </button>

        </form>
    )
}

export default Form
