import React from 'react'
import { DesktopNavigation } from './components/DesktopNavigation';

const Navbar = () => {
    return (
        <div className='w-fit flex justify-center items-center bg-bg-light text-text-light z-50'>
            <DesktopNavigation />
        </div>
    )
}

export default Navbar;