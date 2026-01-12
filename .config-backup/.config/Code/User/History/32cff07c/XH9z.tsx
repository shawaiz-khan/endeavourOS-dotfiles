import React from 'react'

import { NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenu as ShadcnNavigationMenu } from '@/lib/shadcn';

export const DesktopNavigation = () => {
    return (
        <ShadcnNavigationMenu viewport={false}>
            <NavigationMenuList className='space-x-5'>
                
            </NavigationMenuList>
        </ShadcnNavigationMenu>
    )
}