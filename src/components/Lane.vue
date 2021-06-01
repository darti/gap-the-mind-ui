<template>
  <div class="flex flex-col">
    <!-- <input
      v-model="filter"
      class="border-none rounded-full flex-grow font-bold shadow-inner mx-1 text-sm px-2 tag-edit appearance-none focus:outline-none"
    /> -->

    <div class="overflow-y-hidden">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  setup() {
    const filter = ref("")

    return { filter }
  },
})
</script>
