import React from 'react'

import { NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenu as ShadcnNavigationMenu } from '@/lib/shadcn';
import { navigationLinks } from '@/shared/data';

export const DesktopNavigation = () => {
    return (
        <ShadcnNavigationMenu viewport={false}>
            <NavigationMenuList className='space-x-5'>
                {navigationLinks.map((navLink, idx) => (
                    navLink.subItems && navLink.subItems?.length > 0 ? (
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>{navLink.title}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                {navLink.subItems.map((sub, idx) => (
                                    <NavigationMenuLink
                                        key={sub.title + idx}
                                        href={sub.link}
                                    >
                                        {sub.title}
                                    </NavigationMenuLink>
                                ))}
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ) : (
                        <NavigationMenuItem key={navLink.title + idx}>
                            <NavigationMenuLink
                                href={navLink.link}
                                className={navigationMenuTriggerStyle()}
                            >
                                {navLink.title}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    )
                ))}
            </NavigationMenuList>
        </ShadcnNavigationMenu>
    )
}