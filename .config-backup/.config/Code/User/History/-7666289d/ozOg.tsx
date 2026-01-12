import React from 'react'
import { DesktopNavigation, MobileNavigation } from './components';

const Navbar = () => {
    return (
        <div className='w-fit bg-red-500 px-5 py-2 flex justify-center items-center'>
            <div className="hidden lg:block">
                <DesktopNavigation />
            </div>

            <div className=''>
                <MobileNavigation />
            </div>
        </div>
    )
}

export default Navbar;