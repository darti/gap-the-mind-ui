<template>
  <div
    class="h-10 w-10"
    :class="{ selected: selected }"
    @mouseenter="select()"
    @mouseleave="deselect()"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue"

export default defineComponent({
  setup() {
    const selected = ref(false)

    const select = () => (selected.value = true)
    const deselect = () => (selected.value = false)

    return { selected, select, deselect }
  },
})
</script>

<style>
</style>