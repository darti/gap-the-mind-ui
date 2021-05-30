<template>
  <div class="flex-col dashboard">
    <note
      v-for="note in notes"
      :key="note.id"
      :note="note"
      class="m-10 first:mt-0 last:mb-0"
    />
    <div class="border-dashed rounded-md border-2 m-10 p-5 note">
      <icon-button class="m-auto">
        <plus-circle-icon />
      </icon-button>
    </div>
  </div>
</template>
  
<script lang="ts">
import Note from "./Note.vue"
import IconButton from "./IconButton.vue"
import { ref, defineComponent, computed } from "vue"
import { PlusCircleIcon } from "heroicons-vue3/solid"

import { useStore } from "../store"

export default defineComponent({
  components: {
    Note,
    IconButton,
    PlusCircleIcon,
  },

  setup() {
    const store = useStore()

    return {
      notes: computed(() => store.state.notes.notes),
    }
  },
})
</script>