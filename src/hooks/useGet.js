import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useGet = () => {
    const [users, setUsers] = useState()

    const URL=`https://users-crud1.herokuapp.com/users/`

    useEffect(() => {
        axios.get(URL)
        .then(res => setUsers(res.data))
        .catch(error => console.log(error))
    }, [])
    

    return {users}
}

export default useGet
