<template>
  <div class="flex -m-1 mmy-3">
    <div class="flex flex-wrap flex-grow">
      <input
        v-show="editMode"
        ref="tagInput"
        v-model="editedTags"
        class="border-none rounded-full flex-grow font-bold shadow-inner mx-1 text-sm px-2 tag-edit appearance-none focus:outline-none"
        @keyup.enter="toggleEditMode()"
      />

      <div
        v-for="tag in tags"
        v-show="!editMode"
        :key="tag"
        class="rounded-full cursor-pointer font-bold mx-1 text-sm px-2 tag"
      >
        {{ tag }}
      </div>
    </div>

    <check-icon
      v-if="editMode"
      class="cursor-pointer flex-none h-5 w-5"
      @click="toggleEditMode()"
    />
    <pencil-icon
      v-else
      class="cursor-pointer flex-none h-5 w-5"
      @click="toggleEditMode()"
    />
  </div>
</template>



<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from "vue"
import { PencilIcon, CheckIcon } from "heroicons-vue3/solid"
import { useStore } from "../store"

export default defineComponent({
  components: {
    PencilIcon,
    CheckIcon,
  },
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
  emits: ["tagEdit"],
  setup(props, { emit }) {
    const editMode = ref(false)
    const editedTags = ref("")
    const tagInput = ref<HTMLElement>()

    return {
      editMode,
      editedTags,
      tagInput,
      toggleEditMode: () => {
        if (editMode.value) {
          emit("tagEdit", editedTags.value)
        } else {
          editedTags.value = props.tags.map((s) => "#" + s).join(" ")
          tagInput.value?.focus()
        }

        editMode.value = !editMode.value
      },
    }
  },
})
</script>
