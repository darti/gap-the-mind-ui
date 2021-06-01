<template>
  <div class="flex h-full dashboard">
    <lane>
      <note
        v-for="note in notes"
        :key="note.id"
        :note="note"
        class="m-10 first:mt-5 last:mb-0"
      />

      <div class="border-dashed rounded-md border-2 m-10 p-5 note">
        <icon-button class="m-auto" @click="addNote()">
          <plus-circle-icon />
        </icon-button>
      </div>
    </lane>

    <lane v-for="lane in lanes" :key="lane.id">
      <note
        v-for="note in notes"
        :key="note.id"
        :note="note"
        class="m-10 first:mt-0 last:mb-0"
      />
      <!-- <note
        v-for="note in notesByLane(lane.id)"
        :key="note.id"
        :note="note"
        class="m-10 first:mt-0 last:mb-0"
      /> -->
    </lane>
  </div>
</template>
  
<script lang="ts">
import Note from "./Note.vue"
import IconButton from "./IconButton.vue"
import { ref, defineComponent, computed } from "vue"
import { PlusCircleIcon } from "heroicons-vue3/solid"

import { useStore } from "../store"
import Lane from "./Lane.vue"

export default defineComponent({
  components: {
    Note,
    IconButton,
    PlusCircleIcon,
    Lane,
  },

  setup() {
    const store = useStore()

    return {
      notes: computed(() => store.state.notes.notes),
      //notesByLane: computed((id: string) => store.getters.notesByLane(id)),
      addNote: () => store.dispatch("notes/addNote"),
      lanes: computed(() => store.state.lanes.lanes),
    }
  },
})
</script>

<style scoped>
.dashboard {
  height: calc(100% - 27px);
}
</style>