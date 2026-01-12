import React from 'react'
import { DesktopNavigation } from './components/DesktopNavigation';

const Navbar = () => {
    return (
        <div className='w-fit flex px-5 py-2 rounded-full justify-center items-center bg-bg-light text-text-light z-50'>
            <DesktopNavigation />
        </div>
    )
}

export default Navbar;