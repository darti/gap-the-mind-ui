<template>
  <div class="flex h-full bg-green-800 w-full">
    <div class="bg-red-400 overflow-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {},
})
</script>
