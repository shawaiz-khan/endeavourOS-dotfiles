import React from 'react'
import { DesktopNavigation, MobileNavigation } from './components';

const Navbar = () => {
    return (
        <div className='w-fit bg-bg-dark px-5 py-2 flex justify-center items-center'>
            <div className="hidden lg:block">
                <DesktopNavigation />
            </div>

            <div className='block lg:hidden'>
                <MobileNavigation />
            </div>
        </div>
    )
}

export default Navbar;