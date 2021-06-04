<template>
  <div class="flex h-full w-full">
    <div class="flex-grow overflow-auto">
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
