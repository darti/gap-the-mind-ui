<template>
  <!-- <input
      v-model="filter"
      class="border-none rounded-full flex-grow font-bold shadow-inner mx-1 text-sm px-2 tag-edit appearance-none focus:outline-none"
    /> -->

  <scroll-area class="flex">
    <slot></slot>
  </scroll-area>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import ScrollArea from "./ScrollArea.vue"

export default defineComponent({
  components: {
    ScrollArea,
  },
  setup() {
    const filter = ref("")

    return { filter }
  },
})
</script>
