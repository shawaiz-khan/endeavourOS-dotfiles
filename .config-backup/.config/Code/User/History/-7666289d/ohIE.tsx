import React from 'react'
import { DesktopNavigation } from './components/DesktopNavigation';

const Navbar = () => {
    return (
        <div className='w-fit flex px-5 py-2 rounded-full justify-center items-center border- border-accent bg-bg-dark text-text-dark z-50'>
            <DesktopNavigation />
        </div>
    )
}

export default Navbar;