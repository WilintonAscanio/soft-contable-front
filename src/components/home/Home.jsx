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
import { BiLock } from 'react-icons/bi'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'


const Home = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [width, setWidth] = useState(window.innerWidth)
    const navigate = useNavigate()

    const changeScreen = () => {
        setWidth(window.innerWidth)
    }
    window.addEventListener("resize", changeScreen)

    const showMenu = () => {
        setIsVisible(!isVisible)
    }
    return (
        <article className='home'>
            <header className='home__header'>
                <nav className='home__header__nav'>
                    <div className='home__header__nav__figure'>
                        <img src={logo} alt="logo" />
                        <BiMenu className='buttons' onClick={() => { showMenu() }} />

                    </div>
                    <div className='home__header__nav__links'>
                        <section className='home__header__nav__links__search'>
                            <AiOutlineSearch style={{ color: 'gray', fontSize: '18px' }} />
                            <input type="text" placeholder='Search' />
                        </section>
                        <section className='home__header__nav__links__user'>
                            <IoNotificationsOutline className='buttons' />
                            <div>
                                <img src="https://berrydashboard.io/free/static/media/user-round.13b5a31bebd2cc6016d6db2cac8e92d1.svg" alt="" />
                                <IoSettingsOutline />

                            </div>
                        </section>


                    </div>

                </nav>
            </header>
            <main className='home__main'>
                <aside className={!isVisible || width < 900 ? 'hidden' : 'home__main__aside'}>


                    <div className='home__main__aside__div' initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1 }}>
                        <section>
                            <strong>Dashboard</strong>
                            <small onClick={() => navigate('/')}><TbDashboard /> Dashboard</small>
                        </section>
                        <section className='auth'>
                            <strong>Pages <span>Pages Caption</span></strong>
                            <Accordion className='auth__accordion'>
                                <AccordionSummary
                                    expandIcon={<BsChevronDown />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className='auth__accordion__name'
                                >
                                    <Typography className='auth__accordion__name__child'><VscKey /> Authentication</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <section>
                                            <small onClick={() => navigate('/login')}>• Login</small>
                                            <small onClick={() => navigate('/login')}>• Register</small>

                                        </section>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </section>

                        <section>
                            <strong>
                                Inventory
                            </strong>
                            <small onClick={() => navigate('inventory')}><MdOutlineInventory /> Inventory</small>
                        </section>
                        <section>
                            <strong>
                                Admin
                            </strong>
                            <small onClick={() => navigate('admin')}><BiLock /> Admin</small>
                        </section>


                    </div>
                </aside>
                <Outlet />

            </main>


        </article>
    )
}

export default Home