<template>
  <div
    class="rounded-full cursor-pointer font-bold m-1 text-sm leading-loose px-2 relative"
    @mouseover="isActive = true"
    @mouseleave="isActive = false"
  >
    <span>{{ tag }}</span>

    <button
      v-if="isActive"
      class="rounded-full px-2 right-1 absolute focus:outline-none"
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
