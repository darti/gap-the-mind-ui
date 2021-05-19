<template>
  <div
    class="relative m-1 bg-gray-200 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer"
    @mouseover="isActive = true"
    @mouseleave="isActive = false"
  >
    <span>{{ tag }}</span>

    <button
      v-if="isActive"
      class="absolute bg-gray-200 rounded-full right-1 px-2 focus:outline-none"
    >
      X
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs, ref } from "vue"

export default defineComponent({
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const isActive = ref(false)

    return { isActive }
  },
})
</script>
