<template>
  <div class="flex -m-1 mmy-3">
    <div class="flex flex-wrap flex-grow">
      <input
        v-if="editMode"
        v-model="tagsText"
        class="border-none rounded-full flex-grow font-bold mx-1 text-sm px-2 tag-edit appearance-none focus:outline-none"
      />

      <div
        v-for="tag in tags"
        v-else
        :key="tag"
        class="rounded-full cursor-pointer font-bold mx-1 text-sm px-2 tag"
      >
        {{ tag }}
      </div>
    </div>
    <PencilIcon
      class="cursor-pointer flex-none h-5 w-5"
      @click="toggleEditMode()"
    />
  </div>
</template>



<script lang="ts">
import { computed, defineComponent, ref } from "vue"
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
  setup(props) {
    const editMode = ref(false)

    const tagsText = computed(() => props.tags.map((s) => "#" + s).join(" "))

    return {
      editMode,
      tagsText,
      toggleEditMode: () => (editMode.value = !editMode.value),
    }
  },
})
</script>
