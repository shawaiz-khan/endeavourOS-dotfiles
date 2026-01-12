import React from 'react'

import { NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenu as ShadcnNavigationMenu } from '@/lib/shadcn';

export const DesktopNavigation = () => {
    return (
        <div className='w-full bg-neutral-50 z-50'>
            <ShadcnNavigationMenu viewport={false}>
                <NavigationMenuList>
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
        </div>
    )
}