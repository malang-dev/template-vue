<script setup lang="ts">
import { Sidebar } from "@/components/ui/sidebar";
import { cn } from "@/utils/classname";
import { useSidebarStore } from "@/stores/use-sidebar";
import { Navbar } from "@/components/ui/navbar";

const sidebar = useSidebarStore();
</script>

<template>
  <Sidebar />
  <main
    :class="
      cn(
        'min-h-screen bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300',
        sidebar.isOpen === false ? 'lg:ml-[90px]' : 'lg:ml-72',
      )
    "
  >
    <Navbar title="Dashboard" />
    <div className="container pt-8 pb-8 px-4 sm:px-8">
      <RouterView />
    </div>
  </main>
</template>
