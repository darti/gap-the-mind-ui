<template>
  <div class="flex-col dashboard">
    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
      class="m-10 first:mt-0 last:mb-0"
    />
  </div>
</template>
  
<script lang="ts">
import Note from "./Note.vue"
import { ref, defineComponent, computed } from "vue"

import { useStore } from "../store"

export default defineComponent({
  components: {
    Note,
  },

  setup() {
    const store = useStore()

    return {
      notes: computed(() => store.state.notes.notes),
    }
  },
})
</script>