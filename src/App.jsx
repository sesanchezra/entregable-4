import { useEffect, useState } from 'react'
import './App.css'
import User from './components/User/User'
import Logo from './assets/img/Entregable-4.png'
import Modal from './components/Modal/Modal';
import axios from 'axios';

function App() {
  const [modalState, setModalState] = useState(false)

  // Design Link: https://dribbble.com/shots/4647242-TNQ-Dashboard-Members-Page

  const [users, setUsers] = useState()

  const [userUpdate, setUserUpdate] = useState()

  useEffect(() => {
    useGet()
  }, [])

  const useGet = () => {
    const URL = `https://users-crud1.herokuapp.com/users/`

    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(error => console.log(error))

  }

  const usePost = (data) => {
    const URL = `https://users-crud1.herokuapp.com/users/`

    axios.post(URL, data)
      .then(res => console.log(res.data))
      .catch(error => console.log(error))
      .finally(() => useGet())
  }

  const useDelete = (id) =>{

    const URL=`https://users-crud1.herokuapp.com/users/${id}/`

    axios.delete(URL)
      .then(res => console.log(res.data))
      .catch(error=> console.log(error))
      .finally(()=> useGet())

  }

  const showModal = () => {
    setModalState(!modalState)
  }

  return (
    <div className="App">
      <div className='header'>
        <div className='header__logo'>
          <img src={Logo} alt="Logo" />
          <h1>USERS<span>.COM</span></h1>
        </div>
        <button className='header__button' onClick={showModal}>Create New </button>

      </div>
      <div className='users__section__title'>
        <h2>All Users</h2>
        <h3>{users?.length} Totals</h3>
      </div>
      <hr />
      <div className='users__filters'>
        <h4>Filters: </h4>
        <button className='button__filter'>Customers</button>
        <button className='button__filter'>Managers</button>
        <button className='button__filter'>Sellers</button>
      </div>
      <div className='users__section'>
        <div className={`${modalState}`}>
          <Modal
            usePost={usePost}
            showModal={showModal}
            userUpdate={userUpdate}
            setUserUpdate={setUserUpdate}
            useGet={useGet}
          />
        </div>

        {
          users?.map(user => (
            <User
              user={user}
              key={user.id}
              useDelete={useDelete}
              setUserUpdate={setUserUpdate}
            />
          ))
        }
      </div>


    </div>
  )
}

export default App
