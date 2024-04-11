import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import navtodolist from '../assets/img-home/nav-todolist.png';
import navkanban from '../assets/img-home/nav-kanban.png';
import navscrum from '../assets/img-home/nav-scrum.png';
import navhome from '../assets/img-home/nav-home.png';
import navchat from '../assets/img-home/nav-chat.png';
import navplanning from '../assets/img-home/nav-planning.png';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [isOpenBurger, setIsOpenBurger] = useState(false);

  const toggleNavbarBurger = () => {
    setIsOpenBurger(!isOpenBurger);
  };

  return (
    <header className='relative'>
      <nav className='md:sticky md:top-0 md:left-0 md:h-screen bg-nav sticky top-0 flex flex-col'>
        <button
          type='button'
          className='p-3 focus:outline-none hidden md:block'
          onClick={toggleNavbar}
        >
          {isOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10 text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10 text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          )}
        </button>
        <button
          type='button'
          className='p-3 focus:outline-none md:hidden'
          onClick={toggleNavbarBurger}
        >
          {isOpenBurger ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10 text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10 text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          )}
        </button>

        <ul
          className={`md:flex md:flex-col md:h-full md:space-y-4 ${isOpenBurger ? 'flex flex-col items-center h-full' : 'hidden'}`}
        >
          <li className='text-white text-2xl p-2 hover:underline'>
            <NavLink to='/' title="page d'accueil">
              {isOpen && !isOpenBurger ? (
                <img src={navhome} alt='maison' className='img-fluid' />
              ) : (
                'Accueil'
              )}
            </NavLink>
          </li>
          <li className='text-white text-2xl p-2 hover:underline'>
            <NavLink to='/to-do-list' title='page de la ToDo liste'>
              {isOpen && !isOpenBurger ? (
                <img src={navtodolist} alt='crayon' className='img-fluid' />
              ) : (
                'ToDo Liste'
              )}
            </NavLink>
          </li>
          <li className='text-white text-2xl p-2 hover:underline'>
            <NavLink to='/kanban' title='page du Kanban' data-cy='kanbanLink'>
              {isOpen && !isOpenBurger ? (
                <img src={navkanban} alt='tableau' className='img-fluid' />
              ) : (
                'Kanban'
              )}
            </NavLink>
          </li>
          <li className='text-white text-2xl p-2 hover:underline'>
            <NavLink to='/chat' title='page du Chat'>
              {isOpen && !isOpenBurger ? (
                <img src={navchat} alt='message' className='img-fluid' />
              ) : (
                'Chat'
              )}
            </NavLink>
          </li>
          <li className='text-white text-2xl p-2 hover:underline'>
            <NavLink to='/planning' title='page du Planning'>
              {isOpen && !isOpenBurger ? (
                <img src={navplanning} alt='calendrier' className='img-fluid' />
              ) : (
                'Planning'
              )}
            </NavLink>
          </li>
          <li className='text-white text-2xl p-2 hover:underline'>
            <NavLink to='/scrum' title='page du Scrum'>
              {isOpen && !isOpenBurger ? (
                <img src={navscrum} alt='carnet' className='img-fluid' />
              ) : (
                'Scrum'
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
