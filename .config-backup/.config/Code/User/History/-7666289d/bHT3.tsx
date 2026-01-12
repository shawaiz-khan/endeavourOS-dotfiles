import React from 'react'
import { DesktopNavigation, MobileNavigation } from './components';

const Navbar = () => {
    return (
        <div className='w-fit flex px-5 py-2 rounded-full justify-center items-center bg-transparent text-text-dark z-50'>
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