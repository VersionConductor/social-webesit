import React, { useState } from 'react'
import logoImg from '../assets/logo.svg'
import profile from '../assets/profile.png'
import { DataNav } from '../data/DataNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faGear, faMessage, faSearch } from '@fortawesome/free-solid-svg-icons'
import IconbtnBar from '../components/IconbtnBar'

const Navbar = () => {
    const [isToggle, setIsTogle] = useState(false);

    const handleToggle = () => {
        setIsTogle(!isToggle);
    }
  return (
    <>
    {/* navbar start  */}
     <div className='w-full bg-white fixed top-0 z-10'>
        <nav className='flex items-center justify-between w-full xl:w-[84%] h-[56px] mx-auto px-3'>
            {/* Navbar logo image  */}
            <div className='me-4 cursor-pointer'>
                <img src={logoImg} alt="Logo image" />
            </div>
            <div className='lg:hidden ms-auto bg-slate-200 px-3 py-2 rounded-lg hover:bg-slate-300' onClick={handleToggle}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={`lg:flex ${isToggle ? 'flex':'hidden'}  flex-col lg:flex-row items-center lg:flex-1 lg:static absolute top-[57px] left-0 bg-white w-full`}>
                <div className='border flex rounded-lg py-2 bg-gray-100 lg:max-w-fit w-[93%] lg:m-0 mt-3'>
                    <button className='ms-2'><FontAwesomeIcon icon={faSearch} /></button>
                    <input className='ms-4 bg-transparent border-none outline-none w-full' type="search" placeholder='search...' />
                </div>
                <div className='lg:flex lg:flex-row w-full justify-end'>
                    {DataNav.map((items, index) => {
                        return <a className='font-bold text-gray-500 lg:px-4 py-[2px] px-[30px] hover:text-[#106FEC] leading-[45px] block lg:border-none border-b-[1px] border-b-gray-200' key={index} href="#">{items}</a>
                    })}
                </div>
            </div>
            <div className='flex items-center ms-4 gap-2'>
                <IconbtnBar icon={faMessage} />
                <IconbtnBar icon={faGear} />
                <IconbtnBar icon={faBell} />
                <div>
                    <img className='w-10 rounded-md cursor-pointer' src={profile} alt="Profile image" />
                </div>
            </div>
        </nav>
     </div>
     {/* navbar end  */}
    </>
  )
}

export default Navbar
