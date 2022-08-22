import React from 'react'
import Form from '../Form/Form'
import '../Modal/Modal.css'

const Modal = ({usePost , showModal , userUpdate , setUserUpdate,useGet}) => {
    return (
        <div className='Modal'>
            <Form
                usePost={usePost}
                showModal={showModal}
                userUpdate={userUpdate}
                setUserUpdate={setUserUpdate}
                useGet={useGet}
            />
        </div>
    )
}

export default Modal
