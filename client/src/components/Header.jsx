import React from 'react'
import Logo from '../img/logo.svg'

const Header = () => {
  return (
    <div className='container left-[120px] sm:left-0'>
        <header className='absolute text-white pt-6'>
            <nav className='flex sm:grid'>
                <div className='flex gap-24 sm:grid sm:gap-4'>
                    <a href='.' className='flex gap-4 w-32'>
                        <img src={Logo} alt="Logo" />
                        <p className=' uppercase pt-1 sm:text-xs'>Music Box</p>
                    </a>
                    <ul className='flex gap-6 pt-1 sm:grid sm:gap-1'>
                        <li className='uppercase text-base text-grayText sm:text-xs hover:text-white hover:transition-all' >
                            <a href=".">Главная</a>
                        </li>
                        <li className='uppercase text-base text-grayText sm:text-xs hover:text-white hover:transition-all'>
                            <a href=".">Каталог</a>
                        </li>
                        <li className='uppercase text-base text-grayText sm:text-xs hover:text-white hover:transition-all'>
                            <a href=".">Исполнители</a>
                        </li>
                        <li className='uppercase text-base text-grayText sm:text-xs hover:text-white hover:transition-all'>
                            <a href=".">Контакты</a>
                        </li>
                    </ul>
                </div>
                <label className='pl-[264px] sm:pl-0'>
                    <input className='bg-grayInput rounded-xl text-sm p-1 pl-2  w-64 sm:mt-5 sm:w-[370px]' name='text' type="search" placeholder='ПОИСК...'/>
                </label>
            </nav>
        </header>
    </div>
  )
}

export default Header