"use client"

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { navigationLinks } from '@/shared/data'

export const MobileNavigation = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="relative">
            <button onClick={() => setOpen(!open)}>
                {open ? <X /> : <Menu />}
            </button>

            <div
                className={`absolute top-full left-0 w-full bg-bg-dark text-text-dark transition-max-h duration-300 overflow-hidden ${open ? 'max-h-screen' : 'max-h-0'
                    }`}
            >
                <nav className="flex flex-col p-4 space-y-3">
                    {navigationLinks.map((link) =>
                        link.subItems ? (
                            <div key={link.title}>
                                <span className="font-bold">{link.title}</span>
                                <div className="ml-4 flex flex-col space-y-1">
                                    {link.subItems.map((sub) => (
                                        <Link key={sub.title} href={sub.link}>
                                            {sub.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link key={link.title} href={link.link}>
                                {link.title}
                            </Link>
                        )
                    )}
                </nav>
            </div>
        </div>
    )
}