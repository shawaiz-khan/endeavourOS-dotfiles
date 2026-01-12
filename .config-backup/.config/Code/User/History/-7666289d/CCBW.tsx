import React from 'react'
import { DesktopNavigation, MobileNavigation } from './components';

const Navbar = () => {
    return (
        <div className='w-full bg-red-500/80 backdrop-blur-xs max-w-5xl px-5 rounded-full py-2'>
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