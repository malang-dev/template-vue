<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { DarkModeToggle } from "@/components/ui/dark-mode";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { default as SidebarMenu } from "@/components/ui/sidebar/SidebarMenu.vue";
import { Icon } from "@iconify/vue";

interface NavbarProps {
  title: string;
}

const props = defineProps<NavbarProps>();
</script>

<template>
  <header
    class="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary"
  >
    <div class="mx-4 sm:mx-8 flex h-14 items-center">
      <div class="flex items-center space-x-4 lg:space-x-0">
        <Sheet>
          <SheetTrigger class="lg:hidden" as-child>
            <Button variant="outline" class="mr-3 p-3 lg:hidden">
              <Icon icon="lucide:menu" class="w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent class="sm:w-80 px-3 h-full flex flex-col" side="left">
            <SheetHeader>
              <Button class="flex justify-center items-center pb-2 pt-1" variant="link" as-child>
                <RouterLink to="/" class="flex items-center gap-2">
                  <Icon icon="lucide:panels-top-left" class="w-6 h-6 mr-1" />
                  <h1 class="font-bold text-lg">Brand</h1>
                </RouterLink>
              </Button>
            </SheetHeader>
            <SidebarMenu :is-open="true" />
          </SheetContent>
        </Sheet>

        <h1 class="font-bold">{{ props.title }}</h1>
      </div>
      <div class="flex flex-1 items-center space-x-2 justify-end">
        <DarkModeToggle />
      </div>
    </div>
  </header>
</template>
