import React from 'react'
import { DesktopNavigation } from './components/DesktopNavigation';
import { MobileNavigation } from './components/MobileNavigation';

const Navbar = () => {
    return (
        <div className='w-fit flex px-5 py-2 rounded-full justify-center items-center bg-bg-dark text-text-dark z-50'>
            <div className='hidden lg:block'>
                <DesktopNavigation />
            </div>

            <div className='block lg:hidden'>
                <MobileNavigation />
            </div>
        </div>
    )
}

export default Navbar;