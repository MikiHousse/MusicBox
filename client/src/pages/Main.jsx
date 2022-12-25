import React from 'react'
// import Logo from '../img/logo.svg'
import Eminem from '../img/eminem.jpg'
import AvatarOne from '../img/avatarOne.png'
import Ordinary from '../img/ordinary.png'
import Phone from '../img/phone.png'
// import Google from '../img/Google.svg'
// import Twiter from '../img/Twitter.svg'
// import Facrbook from '../img/Facebook.svg'
// import Instagram from '../img/Instagram.svg'
import ButtonOrders from '../components/ButtonOrders.jsx'
import ButtonAlbom from '../components/ButtonAlbom'

export const Main = () => {
  return (
    <>  
        {/* <div className='container left-[120px] sm:left-0'>
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
        </div> */}
        <main className='bg-black'>
            <h1 className=' hidden'>Музыкальный сервис Music Box</h1>
            <section className='head'>
                <div className='container text-white pt-[170px] pb-52 sm:pt-[300px]'>
                    <div className='grid text-center'>
                        <p className='text-[60px] uppercase font-bold sm:text-3xl sm:w-[350px]'>Онлайн музыка где угодно</p>
                        <p className='text-[38px] uppercase font-bold sm:text-lg sm:w-[350px] sm:pt-2'>без ограничений</p>
                        <div>
                            <p className='text-base sm:w-[350px] sm:pt-4 sm:text-sm'>Получите доступ всего за несколько шагов. Заполните форму ниже и откройте мир музыки</p>
                            <div className='flex justify-center gap-6 pt-5 sm:grid'>
                                <label className='gap-6'>
                                    <input className='bg-inherit border-2 w-[270px] h-[50px] p-4 pl-5 rounded-lg sm:w-[365px]' name='name' type="text" placeholder='Имя' />
                                </label>
                                <label className='gap-6'  action="">
                                    <input className='bg-inherit border-2 w-[270px] h-[50px] p-4 pl-5 rounded-lg sm:w-[365px]' name='email' type="text" placeholder='Email' />
                                </label>
                            </div>
                            <div className='pt-6'>
                                <a className='inline-block bg-green-600 px-[220px] py-5 rounded-xl sm:px-[115px] hover:bg-green-500 hover:transition-all' href=".">Получить доступ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container text-white'>
                    <h2 className='text-4xl text-center pt-[100px] uppercase font-bold sm:text-lg'>Формы подписки</h2>
                    {/* plans */}
                    <div className='pt-20 flex justify-between sm:grid sm:gap-12'>
                        <div className='card-one w-[365px] h-[610px] rounded-xl'>
                            <h3 className='text-2xl uppercase text-center pt-6'>Бесплатная</h3>
                            <div className=' text-center pt-[200px]'>
                                <span className='text-6xl mr-4'>0</span>
                                <sup className='text-3xl'>РУБ.</sup>
                            </div>
                            {/* <div className=' text-center pt-20'>
                                <a className='px-[110px] border-2 py-5 inline-block rounded-xl hover:bg-gray-200 hover:text-black hover:transition-all' href=".">ОФОРМИТЬ</a>
                            </div> */}
                            <ButtonOrders/>
                            <p className='text-[12.8px] pt-[64px] text-center px-5'>Оплата в месяц. Бесплатный тариф предоставляет доступ ко всей коллекции музыки. Присутствует реклама</p>
                        </div>
                        <div className='card-two w-[365px] h-[610px] rounded-xl'>
                            <h3 className='text-2xl uppercase text-center pt-6'>Стандартная</h3>
                            <div className=' text-center pt-[200px]'>
                                <span className='text-6xl mr-4'>250</span>
                                <sup className='text-3xl'>РУБ.</sup>
                            </div>
                            <ButtonOrders/>
                            {/* <div className=' text-center pt-20'>
                                <a className='px-[110px] border-2 py-5 inline-block rounded-xl hover:bg-gray-200 hover:text-black hover:transition-all' href=".">ОФОРМИТЬ</a>
                            </div> */}
                            <p className='text-[12.8px]  pt-[64px] text-center px-5'>Оплата в месяц. Стандартный тариф предоставляет доступ ко всей коллекции музыки в среднем качестве.</p>
                        </div>
                        <div className='card-tree w-[365px] h-[610px] rounded-xl'>
                            <h3 className='text-2xl uppercase text-center pt-6'>Премиум</h3>
                            <div className=' text-center pt-[200px]'>
                                <span className='text-6xl mr-4'>500</span>
                                <sup className='text-3xl'>РУБ.</sup>
                            </div>
                            <ButtonOrders/>
                            {/* <div className=' text-center pt-20'>
                                <a className='px-[110px] border-2 py-5 inline-block rounded-xl hover:bg-gray-200 hover:text-black hover:transition-all' href=".">ОФОРМИТЬ</a>
                            </div> */}
                            <p className='text-[12.8px] pt-[64px] text-center px-5'>Оплата в месяц. Премиум тариф предоставляет доступ ко всей коллекции музыки в высоком качестве.</p>
                        </div>
                    </div>
                    <p className='text-center pt-20 text-base sm:pt-10'>На всех тарифах возможно прослушивание музыки с мобильных устройств. На премиум тарифе вы можете скачать все композиции на ваше устройство и слушать музыку без подключения к интернету</p>
                </div>
            </section>
            <article>
                <div className='container text-white'>
                    <h2 className='text-center text-4xl pt-[100px] uppercase sm:text-[18px] sm:pt-[50px]'>Последние новости</h2>
                    <div className='pt-20 grid grid-cols-[575px_575px] gap-[50px] sm:grid-cols-[1fr]'>
                        <div>
                            <img className='w-[575px] h-[286px] sm:w-[375px] sm:h-[185px]' src={Eminem} alt="" />
                        </div>
                        <div>
                            <h3 className='text-3xl sm:text-base'>Music to Be Murdered By</h3>
                            <p className='text-base text-grayText pt-[30px]'>Новый альбом Eminem «Music to Be Murdered By» уже доступен в нашем сервисе. На альбоме вас ждёт 20 новых треков.</p>
                            <div className='flex pt-11 gap-4 sm:pt-6'>
                                <img className='w-[18px] h-[18px]' src={AvatarOne} alt="" />
                                <a href='.' className='text-avtorColor'>Music box</a>
                                <p className='text-grayText'>17/01/2020</p>
                            </div>
                            <ButtonAlbom/>
                            {/* <div className='pt-12'>
                                <a className='px-[30px] border-2 py-4 inline-block rounded-xl border-grayText text-grayText hover:border-white hover:text-white hover:transition-all' href=".">К альбому</a>
                            </div> */}
                        </div>
                    </div>
                    <div className='pt-20 grid grid-cols-[575px_575px] gap-[50px] sm:grid-cols-[1fr]'>
                        <div className='sm:order-last'>
                            <h3 className='text-3xl'>Ordinary Man</h3>
                            <p className='text-base text-grayText pt-[30px]'>Легенда рока Оззи Озборн спустя 10 лет выпустил новый альбом Ordinary Man. Слушайте в числе первых на Music Box</p>
                            {/* тут тоже можно сдедать компонент пользователя только нужно сделать элемент пользователя не зависымим от даты  */}
                            <div className='flex pt-11 gap-4 sm:pt-6'>
                                <img className='w-[18px] h-[18px]' src={AvatarOne} alt="" />
                                <a href='.' className='text-avtorColor'>Music box</a>
                                <p className='text-grayText'>24/02/2020</p>
                            </div>
                            <ButtonAlbom/>
                            {/* <div className='pt-12'>
                                <a className='px-8 border-2 py-4 inline-block rounded-xl border-grayText text-grayText hover:border-white hover:text-white hover:transition-all' href=".">К альбому</a>
                            </div> */}
                        </div>
                        <div className='sm:order-10'>
                            <img className='w-[575px] h-[286px] sm:w-[375px] sm:h-[185px] sm:order-2' src={Ordinary} alt="" />
                        </div>
                    </div>
                </div>
            </article>
            {/* mobile */}
            <section>
                <div className='container text-white pb-[100px]'>
                    <h2 className='text-center text-4xl pt-[100px] uppercase sm:text-[18px] sm:pt-[50px]'>Мобильное приложение</h2>
                    <div className='grid grid-cols-[600px_1fr] pt-16 gap-[140px] sm:grid-cols-[1fr] sm:gap-4'>
                        <div className='sm:order-last'>
                            <p className='text-base text-grayText'>Воспользуйтесь нашим мобильным приложением. Оно позволит слушать музыку с любого устройства на базе операционных систем Androind и iOS.</p>
                            <br />
                            <p className='text-base text-grayText'>С тарифом «Премиум» приложение позволяет скачивать все композиции из нашей коллекции. Вы можете слушать музыку даже без интернета.</p>
                            <div className='pt-4'>
                                <a className='px-10 py-4 bg-downloud hover:bg-orange-500 rounded-full inline-block hover:transition-all' href=".">Скачать</a>
                            </div>
                        </div>
                        <img className='sm:pl-8' src={Phone} alt="" width={333} height={278} />
                    </div>
                </div>
            </section>
        </main>
        {/* <footer className=' bg-gradient-to-r from-reds to-violet text-white'>
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
        </footer> */}
    </>
  )
}
