<script setup lang="ts">
interface ImageProps {
  caption?: string;
  src?: string;
  size?: string;
  alt?: string;
  imgClass?: string;
  alignment?: string;
  captionClass?: string;
}

const props = withDefaults(defineProps<ImageProps>(), {
  caption: "",
  src: "",
  size: "max-w-full",
  alt: "",
  imgClass: "h-auto",
  alignment: "",
  captionClass: "mt-2 text-sm text-center text-gray-500 dark:text-gray-400",
});
</script>

<template>
  <figure v-if="props.caption" :class="props.size">
    <img :src="props.src" :alt="props.alt" :class="[props.size, props.alignment, props.imgClass]" />
    <figcaption :class="props.captionClass">
      {{ props.caption }}
    </figcaption>
  </figure>
  <img
    v-else
    :src="props.src"
    :alt="props.alt"
    :class="[props.size, props.alignment, props.imgClass]"
  />
</template>
