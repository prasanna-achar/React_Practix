import React from 'react';
import {Container, LogoutBtn, Logo} from '../index';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () =>{
    const authStatus = useSelector((state) => state.status)

    const navigate = useNavigate()

    const navItems = [
        {
            name:'home',
            slug:'/',
            active: true
        },
        {
            name:'Login',
            slug:'/login',
            acitve: !authStatus
        },
        {
            name:'Signup',
            slug:'/signup',
            acitve: !authStatus
        },
        {
            name:'Allpost',
            slug:'/all-post',
            acitve: authStatus
        },
        {
            name:'Add Post',
            slug:'/add-post',
            acitve: authStatus
        }
        

    ]

    return(
       <header 
       className='py-3 shadow-sm bg-gray-500'>
        <Container>
            <nav>
                <div>
                    <Link to='/'>
                        <Logo />
                    </Link>
                </div>
                <ul className='flex ml-auto'>
                     {
                        navItems.map((item)=> 
                        item.acitve ? (
                            <li kye={item.name}>
                                <button onClick={navigate(item.slug)}
                                className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                                    {item.name}
                                </button>
                            </li>
                        ) : null
                        )

                     }
                     {
                        authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )
                     }
                </ul>
            </nav>
        </Container>
       </header>
    )

}

export default Header