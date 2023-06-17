import React, { useState } from 'react'
import './home.scss'
import { Outlet, useNavigate } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { TbDashboard } from 'react-icons/tb'
import { VscKey } from 'react-icons/vsc'
import { BsChevronDown } from 'react-icons/bs'
import logo from '../../assets/logo.svg'
import { MdOutlineInventory } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoNotificationsOutline } from 'react-icons/io5'
import { IoSettingsOutline } from 'react-icons/io5'


const Home = () => {
    const [isVisible, setIsVisible] = useState(true)
    const navigate = useNavigate()

    const showMenu = () => {
        setIsVisible(!isVisible)
    }
    return (
        <article className='home'>
            <header className='home__header'>
                <nav className='home__header__nav'>
                    <figure className='home__header__nav__figure'>
                        <img src={logo} alt="logo" />
                        <BiMenu className='buttons' onClick={() => { showMenu() }} />

                    </figure>
                    <div className='home__header__nav__links'>
                        <section className='home__header__nav__links__search'>
                            <AiOutlineSearch style={{ color: 'gray', fontSize: '18px' }} />
                            <input type="text" placeholder='Search' />
                        </section>
                        <section className='home__header__nav__links__user'>
                            <IoNotificationsOutline className='buttons' />
                            <figure>
                                <img src="https://berrydashboard.io/free/static/media/user-round.13b5a31bebd2cc6016d6db2cac8e92d1.svg" alt="" />
                                <IoSettingsOutline />

                            </figure>
                        </section>


                    </div>

                </nav>
            </header>
            <main>
                <aside>


                    <div className={!isVisible ? 'hidden' : ''} initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1 }}>
                        <section>
                            <strong>Dashboard</strong>
                            <small onClick={() => navigate('/')}><TbDashboard /> Dashboard</small>
                        </section>
                        <section>
                            <strong>Pages <span>Pages Caption</span></strong>

                            <small>
                                <VscKey /> Authentication <BsChevronDown />

                            </small>
                            <div>
                                <small onClick={() => navigate('/login')}>Login</small>

                            </div>

                        </section>
                        <section>
                            <strong>
                                Inventory
                            </strong>
                            <small onClick={() => navigate('inventory')}><MdOutlineInventory /> Inventory</small>
                        </section>


                    </div>
                </aside>
                <Outlet />

            </main>


        </article>
    )
}

export default Home