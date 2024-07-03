<script setup lang="ts">
import { cn } from "@/utils/classname";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button, buttonVariants } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Ellipsis, icons, LogOut } from "lucide-vue-next";
import SidebarMenuCollapsible from "./SidebarMenuCollapsible.vue";
import { useSidebarStore } from "@/stores/use-sidebar";
import { onMounted } from "vue";

type SidebarMenuProps = { isOpen: boolean };
const props = defineProps<SidebarMenuProps>();

const sidebar = useSidebarStore();
onMounted(function () {
  sidebar.loadMenu();
});
</script>

<template>
  <ScrollArea class="[&>div>div[style]]:!block">
    <nav class="mt-7 h-full w-full">
      <ul
        class="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2"
      >
        <li
          v-for="(menuItem, index) in sidebar.getMenuList"
          :key="index"
          :class="cn('w-full', menuItem.groupLabel ? 'pt-5' : '')"
        >
          <p
            v-if="(props.isOpen && menuItem.groupLabel) || props.isOpen === undefined"
            class="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate"
          >
            {{ menuItem.groupLabel }}
          </p>
          <TooltipProvider
            v-else-if="!props.isOpen && props.isOpen !== undefined && menuItem.groupLabel"
            :delay-duration="100"
          >
            <Tooltip>
              <TooltipTrigger class="w-full">
                <div class="w-full flex justify-center items-center">
                  <Ellipsis class="h-5 w-5" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{{ menuItem.groupLabel }}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <p v-else class="pb-2"></p>
          <ul v-for="(submenu, submenuIndex) in menuItem.menus" :key="submenuIndex">
            <li v-if="submenu.submenus.length === 0">
              <TooltipProvider :disable-hoverable-content="true" :delay-duration="100">
                <Tooltip>
                  <TooltipTrigger as-child>
                    <Button
                      :variant="submenu.active ? 'secondary' : 'ghost'"
                      class="w-full justify-start h-10 mb-1"
                      as-child
                    >
                      <RouterLink :to="submenu.href">
                        <span :class="cn(props.isOpen === false ? '' : 'mr-4')">
                          <component :is="icons[submenu.icon]" class="w-4" />
                        </span>
                        <p
                          :class="
                            cn(
                              'max-w-[200px] truncate',
                              props.isOpen === false
                                ? '-translate-x-96 opacity-0'
                                : 'translate-x-0 opacity-100',
                            )
                          "
                        >
                          {{ submenu.label }}
                        </p>
                      </RouterLink>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent v-if="props.isOpen === false" side="right">
                    {{ submenu.label }}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
            <li v-else>
              <SidebarMenuCollapsible
                :icon="submenu.icon"
                :label="submenu.label"
                :active="submenu.active"
                :submenus="submenu.submenus"
                :is-open="props.isOpen"
              />
            </li>
          </ul>
        </li>
        <li class="w-full grow flex items-end">
          <TooltipProvider :disable-hoverable-content="true" :delay-duration="100">
            <Tooltip>
              <TooltipTrigger as-child>
                <RouterLink
                  to="/auth/login"
                  :class="[
                    buttonVariants({
                      variant: 'outline',
                    }),
                    'w-full justify-center h-10 mt-5',
                  ]"
                >
                  <span :class="cn(props.isOpen === false ? '' : 'mr-4')">
                    <LogOut class="w-4" />
                  </span>
                  <p
                    :class="
                      cn(
                        'whitespace-nowrap',
                        props.isOpen === false ? 'opacity-0 hidden' : 'opacity-100',
                      )
                    "
                  >
                    Sign out
                  </p>
                </RouterLink>
              </TooltipTrigger>
              <TooltipContent v-if="props.isOpen === false" side="right"> Sign out </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      </ul>
    </nav>
  </ScrollArea>
</template>
