<template>
  <div class="rounded-md shadow-lg p-5">
    <editor-content :editor="editor" />
    <div class="flex flex-wrap -m-1 mmy-3">
      <Tag
        v-for="tag in note.tags"
        :key="tag"
        :tag="tag"
        class="bg-nord3 text-nord4"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3"
import { defaultExtensions } from "@tiptap/starter-kit"
import Highlight from "@tiptap/extension-highlight"
import Typography from "@tiptap/extension-typography"
import Text from "@tiptap/extension-text"
import TextAlign from "@tiptap/extension-text-align"

import NoteModel from "../model/note"
import Tag from "./Tag.vue"
import { defineComponent, PropType, toRefs } from "vue"

export default defineComponent({
  components: {
    EditorContent,
    Tag,
  },
  props: {
    note: {
      type: Object as PropType<NoteModel>,
      required: true,
    },
  },
  setup(props) {
    const { note } = toRefs(props)

    const editor = useEditor({
      content: note.value.text,
      extensions: [
        ...defaultExtensions(),
        Highlight,
        Typography,
        Text,
        TextAlign,
      ],
    })

    return { editor }
  },
})
</script>