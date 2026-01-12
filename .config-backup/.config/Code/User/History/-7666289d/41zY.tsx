import React from 'react'
import { DesktopNavigation, MobileNavigation } from './components';

const Navbar = () => {
    return (
        <div className='w-full bg-red-600/10 max-w-5xl px-5 py-2'>
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