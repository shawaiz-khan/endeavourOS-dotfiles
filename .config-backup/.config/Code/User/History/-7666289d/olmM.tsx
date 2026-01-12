import React from 'react'
import { DesktopNavigation, MobileNavigation } from './components';

const Navbar = () => {
    return (
        <div className='w-full bg-red-600/80 backdrop-blur-xs max-w-5xl px-3 py-2'>
            <div className="hidden w-full lg:block">
                <DesktopNavigation />
            </div>

            <div className='block w-full lg:hidden'>
                <MobileNavigation />
            </div>
        </div>
    )
}

export default Navbar;