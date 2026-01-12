import React from 'react'

import { NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenu as ShadcnNavigationMenu } from '@/lib/shadcn';

export const DesktopNavigation = () => {
    return (
        <ShadcnNavigationMenu viewport={false}>
            <NavigationMenuList className='space-x-5'>
                <NavigationMenuItem>
                    <NavigationMenuLink href='/' className={navigationMenuTriggerStyle()}>Hello World</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </ShadcnNavigationMenu>
    )
}