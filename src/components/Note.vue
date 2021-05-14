<template>
  <div class="shadow-lg rounded-md p-5">
    <editor-content :editor="editor" />
    <div class="flex">
      <div v-for="tag in content.tags" class=" shadow-inner rounded-lg bg-blue-400 p-1 m-1">{{tag}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3";
import { defaultExtensions } from "@tiptap/starter-kit";
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import Text from '@tiptap/extension-text'
import TextAlign from '@tiptap/extension-text-align'

import NoteModel from '../model/note'
import { PropType, toRefs } from "vue";

interface Props {
  content: NoteModel
}

export default {
  components: {
    EditorContent,
  },
  props: {
    content: {
      type: Object as PropType<NoteModel>,
    }
  },
  setup(props: Props) {
    const { content } = toRefs(props)
    const editor = useEditor({
      content: props.content.text,
      extensions: [...defaultExtensions(), Highlight,
        Typography,
        Text,
        TextAlign],
    });

    return { editor, content };
  },
};
</script>