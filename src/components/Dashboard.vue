<template>
    <div class="flex-col">
        <Note v-for="(note, i) in notes" :key="i" :content="note" class="m-11" />
    </div>
</template>
  
<script lang="ts">
import { LoremIpsum } from "lorem-ipsum";
import Note from "./Note.vue"
import { ref } from 'vue'
import NoteModel from '../model/note';

export default {
    components: {
        Note,
    },

    setup() {
        const lorem = new LoremIpsum({
            sentencesPerParagraph: {
                max: 8,
                min: 4
            },
            wordsPerSentence: {
                max: 16,
                min: 4
            }
        });

        let notes = ref(new Array<NoteModel>())

        for (let i = 0; i < 10; i++) {
            notes.value.push({
                text: lorem.generateSentences(2),
                tags: lorem.generateWords(4).split(' ')
            })
        }

        return {
            notes
        }

    },
};
</script>