<script setup lang="ts">
import { computed, ref } from "vue";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { DropdownMenuArrow } from "radix-vue";
import { SidebarMenu } from ".";
import { Icon } from "@iconify/vue";

type SidebarMenuCollapsibleProps = SidebarMenu & { isOpen: boolean };

const props = defineProps<SidebarMenuCollapsibleProps>();
const isSubmenuActive = computed(() => props.submenus.some((submenu) => submenu.active));
const isCollapsed = ref(isSubmenuActive.value);

function setIsCollapsed(value: boolean) {
  isCollapsed.value = value;
}
</script>

<template>
  <Collapsible v-if="props.isOpen" :open="isCollapsed" @update:open="setIsCollapsed">
    <CollapsibleTrigger as-child>
      <Button :variant="props.active ? 'secondary' : 'ghost'" class="w-full justify-start h-10">
        <div class="w-full items-center flex justify-between">
          <div class="flex items-center">
            <span class="mr-4">
              <Icon :icon="props.icon" class="w-4" />
            </span>
            <p
              :class="[
                'max-w-[150px] truncate',
                props.isOpen ? 'translate-x-0 opacity-100' : '-translate-x-96 opacity-0',
              ]"
            >
              {{ props.label }}
            </p>
          </div>
          <div
            :class="[
              'whitespace-nowrap',
              props.isOpen ? 'translate-x-0 opacity-100' : '-translate-x-96 opacity-0',
            ]"
          >
            <Icon icon="lucide:chevron-down" class="w-4 transition-transform duration-200" />
          </div>
        </div>
      </Button>
    </CollapsibleTrigger>
    <CollapsibleContent
      class="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
    >
      <template v-for="(submenu, index) in props.submenus" :key="index">
        <Button
          :variant="submenu.active ? 'secondary' : 'ghost'"
          class="w-full justify-start h-10 mb-1"
          as-child
        >
          <RouterLink :to="submenu.href">
            <span class="mr-4 ml-2">
              <Icon icon="lucide:dot" class="w-4" />
            </span>
            <p
              :class="[
                'max-w-[170px] truncate',
                props.isOpen ? 'translate-x-0 opacity-100' : '-translate-x-96 opacity-0',
              ]"
            >
              {{ submenu.label }}
            </p>
          </RouterLink>
        </Button>
      </template>
    </CollapsibleContent>
  </Collapsible>
  <DropdownMenu v-else>
    <TooltipProvider :disable-hoverable-content="true">
      <Tooltip :delay-duration="100">
        <TooltipTrigger as-child>
          <DropdownMenuTrigger as-child>
            <Button
              :variant="props.active ? 'secondary' : 'ghost'"
              class="w-full justify-start h-10 mb-1"
            >
              <div class="w-full items-center flex justify-between">
                <div class="flex items-center">
                  <span :class="[isOpen === false ? '' : 'mr-4']">
                    <Icon :icon="props.icon" class="w-4" />
                  </span>
                  <p
                    :class="[
                      'max-w-[200px] truncate',
                      isOpen === false ? 'opacity-0' : 'opacity-100',
                    ]"
                  >
                    {{ props.label }}
                  </p>
                </div>
              </div>
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent side="right" align="start" :align-offset="2">
          {{ props.label }}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <DropdownMenuContent side="right" :side-offset="25" align="start">
      <DropdownMenuLabel class="max-w-[190px] truncate">
        {{ props.label }}
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <template v-for="(submenu, index) in submenus" :key="index">
        <DropdownMenuItem as-child>
          <RouterLink :to="submenu.href" class="cursor-pointer">
            <p class="max-w-[180px] truncate">{{ submenu.label }}</p>
          </RouterLink>
        </DropdownMenuItem>
      </template>
      <DropdownMenuArrow class="fill-border" />
    </DropdownMenuContent>
  </DropdownMenu>
</template>
