import React from 'react'
import Google from '../img/Google.svg'
import Twiter from '../img/Twitter.svg'
import Facrbook from '../img/Facebook.svg'
import Instagram from '../img/Instagram.svg'

export const Footer = () => {
  return (
    <footer className=' bg-gradient-to-r from-reds to-violet text-white'>
        <div className='container flex gap-[120px] sm:grid sm:gap-[20px]'>
            <div className='pt-16 pb-[72px] sm:pt-4 sm:pb-[0px]'>
                <h3 className='uppercase font-bold text-lg'>О нас</h3>
                <ul className='pt-4'>
                    <li className='text-base text-grayText hover:text-white hover:transition-all'><a href=".">История компании</a></li>
                    <li className='text-base text-grayText hover:text-white hover:transition-all'><a href=".">Карьера</a></li>
                    <li className='text-base text-grayText hover:text-white hover:transition-all'><a href=".">Особенности</a></li>
                    <li className='text-base text-grayText hover:text-white hover:transition-all'><a href=".">Пресса</a></li>
                </ul>
            </div>
            <div className='pt-16 pb-[72px] sm:pt-4 sm:pb-[0px]'>
                <h3 className='uppercase font-bold text-lg'>Поддержка</h3>
                <ul className='pt-4'>
                    <li className='text-base text-grayText hover:text-white hover:transition-all'><a href=".">База знаний</a></li>
                    <li className='text-base text-grayText hover:text-white hover:transition-all'><a href=".">Тарифы</a></li>
                    <li className='text-base text-grayText hover:text-white hover:transition-all'><a href=".">Мобильное приложение</a></li>
                    <li className='text-base text-grayText hover:text-white hover:transition-all'><a href=".">Условия использования</a></li>
                </ul>
            </div>
            <div className='pt-16 pb-[72px] sm:pt-4 sm:pb-[0px]'>
                <h3 className='uppercase font-bold text-lg'>Контакты</h3>
                <ul className='pt-4'>
                    <li className='text-base text-grayText hover:text-white hover:transition-all'><a href=".">hello@music.box</a></li>
                    <li className='text-base text-grayText hover:text-white hover:transition-all'><a href=".">Russia, Moscow. Music Box studio</a></li>
                    <li className='text-base text-grayText hover:text-white hover:transition-all'><a href=".">+ 7 499 999 99 99</a></li>
                </ul>
            </div>
            <div className='pt-16 pb-[72px] sm:pt-4'>
                <h3 className='uppercase font-bold text-lg'>Подписывайтесь</h3>
                <ul className='pt-4 flex gap-6'>
                    <li className='text-base text-grayText hover:text-white hover:transition-all'><a href="."><img src={Google} alt="" /></a></li>
                    <li className='text-base text-grayText hover:text-white hover:transition-all'><a href="."><img src={Twiter} alt="" /></a></li>
                    <li className='text-base text-grayText hover:text-white hover:transition-all'><a href="."><img src={Facrbook} alt="" /></a></li>
                    <li className='text-base text-grayText hover:text-white hover:transition-all'><a href="."><img src={Instagram} alt="" /></a></li>
                </ul>
            </div>
        </div>
        <hr className=' bg-gray-400' />
        <nav className=' container pb-[50px]'>
            <ul className='flex pt-10 gap-4 sm:grid'>
                <li className='text-base text-grayText hover:text-white hover:transition-all'><a href=".">Магазин</a></li>
                <li className='text-base text-grayText hover:text-white hover:transition-all'><a href=".">Обслуживание</a></li>
                <li className='text-base text-grayText hover:text-white hover:transition-all'><a href=".">Блог</a></li>
                <li className='text-base text-grayText hover:text-white hover:transition-all'><a href=".">Поддержка</a></li>
                <li className='text-base text-grayText hover:text-white hover:transition-all'><a href=".">Контакты</a></li>
            </ul>
        </nav>
    </footer>
  )
}
