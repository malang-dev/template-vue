<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/classname";
import { Icon } from "@iconify/vue";

interface SidebarToggleProps {
  isOpen: boolean;
  setIsOpen?: () => void;
}

const props = defineProps<SidebarToggleProps>();
</script>

<template>
  <div class="invisible lg:visible absolute top-[12px] -right-[16px] z-20">
    <Button @click="props.setIsOpen" class="rounded-md w-8 h-8" variant="outline" size="icon">
      <Icon
        icon="lucide:chevron-left"
        :class="
          cn(
            'h-4 w-4 transition-transform ease-in-out duration-700',
            props.isOpen === false ? 'rotate-180' : 'rotate-0',
          )
        "
      />
    </Button>
  </div>
</template>
