import React from 'react';
import { Link } from 'react-router-dom';
import { BiListUl } from 'react-icons/bi';

const NavBar = () => {
    return (
        <div className='bg-neutral-800 flex justify-between px-20 py-4'>
            <Link to='/' className='text-white font-bold flex gap-3 justify-between items-center content-center'> 
                <BiListUl/>
                <h2 className='text-lg'>App</h2>
            </Link>
            <ul className='flex gap-x-1'>
                <li>
                    <Link to={'/'} className='bg-orange-100 px-2 py-1 text-sm rounded-xl'>Home</Link>
                </li>
                <li>
                    <Link to={'/new'} className='bg-orange-400 px-2 py-1 text-sm rounded-xl'>Agregar</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;