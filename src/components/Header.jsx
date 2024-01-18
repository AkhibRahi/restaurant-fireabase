import React, { useState } from 'react'
import logo from '../img/logo.png'
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md'
import Avatar from "../img/avatar.png"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/Reducer'


function Header() {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user }, dispatch] = useStateValue()

    const [isMenu, setMenu] = useState(false)

    const login = async () => {

        if (!user) {
            const response
                = await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type: actionType.SET_USER,
                user: response.user.providerData[0],
            })
            // console.log(response.user.providerData[0])
            localStorage.setItem('user', JSON.stringify(response.user.providerData[0]))
        }
        else {
            setMenu(!isMenu);
        }

    }

    const logout = () => {
        setMenu(false)
        localStorage.clear();

        dispatch({
            type: actionType.SET_USER,
            user: null
        })
        window.location.href = "/"
    }
    return (
        <header className="fixed z-50 bg-primary w-screen h-auto p-4 px-6 md:px-16 md:p-6">
            {/* Desktop and tablet */}
            <div className='hidden md:flex w-full h-full'>
                <Link to="/">
                    <div className='flex items-center gap-2'>
                        <img className='w-8 object-cover' src={logo} alt='logo'></img>
                        <p className='text-headingColor text-xl font-bold'>City</p>
                    </div>
                </Link>
                <div className='flex ml-auto gap-8'>
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className='flex items-center gap-8'>
                        <li className='text-base text-textColor hover:text-headingColor 
                duration-100 transition-all ease-out cursor-pointer'>Home</li>
                        <li className='text-base text-textColor hover:text-headingColor 
                duration-100 transition-all ease-out cursor-pointer'>Menu</li>
                        <li className='text-base text-textColor hover:text-headingColor 
                duration-100 transition-all ease-out cursor-pointer'>About Us</li>
                        <li className='text-base text-textColor hover:text-headingColor 
                duration-100 transition-all ease-out cursor-pointer'>Service</li>
                    </motion.ul>

                    <div className='relative flex items-center'>
                        < MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
                        <div className=' absolute -top-1 -right-1 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className='text-xs text-white font-semibold'>2</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <motion.img
                            whileTap={{ scale: 0.6 }}
                            src={user ? user.photoURL : Avatar} className='outline-none rounded-full cursor-pointer w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl'
                            alt="User Profile"
                            onClick={login} />
                    </div>

                    {isMenu && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            className='absolute top-[4rem] right-[5rem] bg-gray-50 rounded-lg cursor-pointer'>
                            <Link to='/createitem'>
                                {user && user.email === "akhibrahi786@gmail.com" && (
                                    <p onClick={()=> setMenu(false)} className='text-textColor text-base px-8 py-2 hover:bg-slate-200 
                            transition-all duration-100 ease-in-out text-center mx-auto flex items-center gap-3'>New Item <MdAdd /> </p>
                                )}
                            </Link>
                            <p onClick={logout} className='text-textColor text-base px-8 py-2 hover:bg-slate-200 
                        transition-all duration-100 ease-in-out text-center mx-auto flex items-center gap-3'>Logout <MdLogout /> </p>
                        </motion.div>
                    )}
                </div>
            </div>
            {/* mobile */}
            <div className='flex md:hidden w-full h-full justify-between cursor-pointer '>

                <div className='relative flex items-center'>
                    < MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
                    <div className=' absolute -top-1 -right-1 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                        <p className='text-xs text-white font-semibold'>2</p>
                    </div>
                </div>

                <Link to="/">
                    <div className='flex items-center gap-2'>
                        <img className='w-8 object-cover' src={logo} alt='logo'></img>
                        <p className='text-headingColor text-xl font-bold'>City</p>
                    </div>
                </Link>

                <div className='relative'>
                    <motion.img
                        whileTap={{ scale: 0.6 }}
                        src={user ? user.photoURL : Avatar} className='outline-none rounded-full cursor-pointer w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl'
                        alt="User Profile"
                        onClick={login} />
                </div>

                {isMenu && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        className='absolute top-[4rem] right-[5rem] bg-gray-50 rounded-lg cursor-pointer'>
                        <Link to='/createitem'>
                            {user && user.email === "akhibrahi786@gmail.com" && (
                                <p   className='text-textColor text-base px-8 py-2 hover:bg-slate-200 
                            transition-all duration-100 ease-in-out text-center mx-auto flex items-center gap-3' onClick={()=> setMenu(false)}>New Item <MdAdd /> </p>
                            )}
                        </Link>
                        <ul className='flex flex-col gap-1'>
                            <li className='text-textColor text-base px-8 py-2 hover:bg-slate-200 
                        transition-all duration-100 ease-in-out' onClick={()=> setMenu(false)}>Home</li>
                            <li className='text-textColor text-base px-8 py-2 hover:bg-slate-200 
                        transition-all duration-100 ease-in-out' onClick={()=> setMenu(false)}>Menu</li>
                            <li className='text-textColor text-base px-8 py-2 hover:bg-slate-200 
                        transition-all duration-100 ease-in-out' onClick={()=> setMenu(false)}>About Us</li>
                            <li className='text-textColor text-base px-8 py-2 hover:bg-slate-200 
                        transition-all duration-100 ease-in-out' onClick={()=> setMenu(false)}>Service</li>
                        </ul>

                        <p onClick={logout} className='text-textColor text-base rounded-lg m-3 px-8 py-2 bg-gray-200 hover:bg-gray-300-200 
                        transition-all duration-100 ease-in-out text-center flex items-center gap-3'>Logout <MdLogout /> </p>
                    </motion.div>
                )}
            </div>
        </header>
    )
}

export default Header;