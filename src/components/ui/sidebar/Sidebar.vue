<script setup lang="ts">
import { cn } from "@/utils/classname";
import { Button } from "@/components/ui/button";
import SidebarToggle from "./SidebarToggle.vue";
import SidebarMenu from "./SidebarMenu.vue";
import { PanelsTopLeft } from "lucide-vue-next";
import { useSidebarStore } from "@/stores/use-sidebar";

const sidebar = useSidebarStore();
</script>

<template>
  <aside
    :class="
      cn(
        'fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300 bg-zinc-50 dark:bg-zinc-900',
        sidebar.isOpen === false ? 'w-[90px]' : 'w-72',
      )
    "
  >
    <SidebarToggle :is-open="sidebar.isOpen" :set-is-open="sidebar.setIsOpen" />
    <div
      class="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800"
    >
      <Button
        :class="
          cn(
            'transition-transform ease-in-out duration-300 mb-1',
            sidebar.isOpen === false ? 'translate-x-1' : 'translate-x-0',
          )
        "
        variant="link"
        asChild
      >
        <RouterLink to="/" class="flex items-center gap-2">
          <PanelsTopLeft class="w-6 h-6 mr-1" />
          <h1
            :class="
              cn(
                'font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300',
                sidebar.isOpen === false
                  ? '-translate-x-96 opacity-0 hidden'
                  : 'translate-x-0 opacity-100',
              )
            "
          >
            Brand
          </h1>
        </RouterLink>
      </Button>

      <SidebarMenu :is-open="sidebar.isOpen" />
    </div>
  </aside>
</template>
