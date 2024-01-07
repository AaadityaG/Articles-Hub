import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import {logout} from '../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    // className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    className='inline-bock px-6 py-2 duration-200 bg-gradient-to-r hover:to-rose-500 hover:via-rose-500  hover:from-orange-300 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn