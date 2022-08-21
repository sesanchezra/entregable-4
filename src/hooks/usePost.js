import axios from 'axios'
import React from 'react'
import useGet from './useGet'

const usePost = (data) => {

    const URL=`https://users-crud1.herokuapp.com/users/`

    axios.post(URL,data)
        .then(res => console.log(res.data))
        .catch(error => console.log(error))

    return {}
}

export default usePost
