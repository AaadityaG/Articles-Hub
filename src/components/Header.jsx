import React from 'react'
import {Container, Logo, LogoutBtn} from './index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  const headerStyles = {
    position: 'sticky',
    top: 0, // Adjust the value as needed to set the scroll threshold for sticking
    padding: '1.5rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    background: 'rgba(173, 216, 230, 0.8)', // Change the RGB values and alpha transparency as needed
  };

  return (
    <header className='py-3 shadow text-white backdrop-blur-lg' style={{headerStyles}}>
      <Container>
        <nav className='flex justify-center'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo />
              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 bg-gradient-to-r hover:to-rose-500 hover:via-rose-500  hover:from-orange-300 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header