<template>
  <div class="flex flex-wrap -m-1 mmy-3">
    <div
      v-for="tag in tags"
      :key="tag"
      class="rounded-full cursor-pointer font-bold mx-1 text-sm px-2 tag"
    >
      {{ tag }}
    </div>
    <PencilIcon class="h-5 w-5" />
  </div>
</template>



<script lang="ts">
import { defineComponent } from "vue"
import { PencilIcon } from "heroicons-vue3/solid"

export default defineComponent({
  components: {
    PencilIcon,
  },
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
  setup(props) {},
})
</script>
