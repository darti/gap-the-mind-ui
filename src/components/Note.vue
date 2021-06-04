<template>
  <div class="rounded-md shadow-lg p-5 note relative">
    <icon-button
      id="delete-button"
      class="cursor-pointer h-5 top-1 right-1 w-5 absolute"
      @click="deleteNote()"
    >
      <x-icon></x-icon>
    </icon-button>
    <editor-content :editor="editor" />
    <tag-list :tags="note.tags" @tag-edit="editTags($event)" />
  </div>
</template>

<script lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3"
import { defaultExtensions } from "@tiptap/starter-kit"
import Highlight from "@tiptap/extension-highlight"
import Typography from "@tiptap/extension-typography"
import Text from "@tiptap/extension-text"
import Focus from "@tiptap/extension-focus"
import TextAlign from "@tiptap/extension-text-align"

import NoteModel from "../model/note"
import { defineComponent, PropType, toRefs, ref } from "vue"
import TagList from "./TagList.vue"
import { useStore } from "../store"
import IconButton from "./IconButton.vue"
import { XIcon } from "heroicons-vue3/solid"

export default defineComponent({
  components: {
    EditorContent,
    TagList,
    IconButton,
    XIcon,
  },
  props: {
    note: {
      type: Object as PropType<NoteModel>,
      required: true,
    },
  },
  setup(props) {
    const { note } = toRefs(props)
    const store = useStore()

    const edit = ref(false)

    const editTags = (tags: string) => {
      store.dispatch("notes/editTags", { noteId: note.value.id, tags })
    }

    const editNote = (content: any) =>
      store.dispatch("notes/editNote", {
        noteId: note.value.id,
        content,
      })

    const deleteNote = () =>
      store.dispatch("notes/deleteNote", { noteId: note.value.id })

    const editor = useEditor({
      content: note.value.text,
      extensions: [
        ...defaultExtensions(),
        Highlight,
        Typography,
        Text,
        TextAlign,
        Focus.configure({
          className: "has-focus",
          mode: "all",
        }),
      ],
      onUpdate({ editor }) {
        editNote(editor.getJSON())
      },
    })

    return { editor, editTags, edit, deleteNote }
  },
})
</script>


<style scoped>
/* #delete-button.selected {
  @apply visible;
}

#delete-button.unselected {
  @apply invisible;
} */
</style>