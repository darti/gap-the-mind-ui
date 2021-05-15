<template>
    <div class="flex-col">
        <Note v-for="(note, i) in notes" :key="i" :note="note" class="m-11" />
    </div>
</template>
  
<script lang="ts">

import Note from "./Note.vue"
import { ref, defineComponent, computed } from 'vue'


import { useStore } from '../store'


export default defineComponent({
    components: {
        Note,
    },

    setup() {

        const store = useStore()

        

        return {
            notes : computed(() => store.state.notes.notes)
        }

    },
})
</script>