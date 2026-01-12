import React from 'react'

import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Dialog as ShadcnDialog,
} from '@/lib/shadcn'
import { ArrowUpRight, Menu } from 'lucide-react'
import { navigationLinks } from '@/shared/data'
import Link from 'next/link'
import LogoSvg from '@/assets/Icons/LogoSvg'

export const MobileNavigation = () => {
    return (
        <div className='flex justify-between items-center text-text-dark'>
            <LogoSvg className="text-text-dark max-w-16" />

            <ShadcnDialog>
                <DialogTrigger asChild>
                    <Menu />
                </DialogTrigger>

                <DialogContent className='bg-bg-dark text-text-dark outline-0 border-2 border-surface-dark'>
                    <DialogHeader className='text-start'>
                        <DialogTitle className=''>Navigation Menu</DialogTitle>
                    </DialogHeader>

                    <DialogDescription className='flex flex-col space-y-5 py-3 text-base sm:text-xl text-text-muted-dark'>
                        {navigationLinks.map((navLink, idx) => (
                            navLink.subItems && navLink.subItems.length > 0 ? (
                                <span key={navLink.title} className='flex flex-col'>
                                    <span className='mb-1 font-bold text-sm sm:text-base'>{navLink.title}</span>

                                    {navLink.subItems.map((sub, subIdx) => (
                                        <Link
                                            key={sub.title + idx + subIdx}
                                            href={sub.link}
                                            className='flex justify-start items-center'
                                        >
                                            {sub.title} <ArrowUpRight size={18} />
                                        </Link>
                                    ))}
                                </span>
                            ) : (
                                <Link
                                    key={navLink.title + idx}
                                    href={navLink.link}
                                    className='flex justify-start items-center'
                                >
                                    {navLink.title} <ArrowUpRight size={18} />
                                </Link>
                            )
                        ))}

                    </DialogDescription>
                </DialogContent>
            </ShadcnDialog>
        </div>
    )
}