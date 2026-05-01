<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="flex items-center justify-center">
        <NavigationMenu>
            <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
                    <RouterLink to="/select-user">Recommendations</RouterLink>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
                    <RouterLink to="/catalog">Book catalog</RouterLink>
                </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
                <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
                    <RouterLink to="/vender">About the data</RouterLink>
                </NavigationMenuLink>
            </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </div>
</template>