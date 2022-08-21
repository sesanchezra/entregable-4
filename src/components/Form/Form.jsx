import React from 'react'
import '../Form/Form.css'

const Form = () => {
    return (
        <form className='Form'>
            <h2>New User</h2>
            <div className='form__inputs'>
                <div className='input'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name' />
                </div>
                <div className='input'>
                    <label htmlFor="last_name">Last Name:</label>
                    <input type="text" id='last_name' />
                </div>
                <div className='input'>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id='email' />
                </div>
                <div className='input'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' />
                </div>
                <div className='input'>
                    <label htmlFor="birth">Birthday:</label>
                    <input type="date" id='birthday' />
                </div>
            </div>


            <button className='form__button'>Create User</button>

        </form>
    )
}

export default Form
