import React from 'react'
import Form from '../Form/Form'
import '../Modal/Modal.css'

const Modal = ({usePost,showModal}) => {
    return (
        <div className='Modal'>
            <Form
                usePost={usePost}
                showModal={showModal}
            />
        </div>
    )
}

export default Modal
