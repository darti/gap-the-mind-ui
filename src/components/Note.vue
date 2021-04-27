<template>
  <div class="shadow-lg rounded-md">
    <editor-content :editor="editor" />
  </div>
</template>

<script lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3";
import { defaultExtensions } from "@tiptap/starter-kit";
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import Text from '@tiptap/extension-text'
import TextAlign from '@tiptap/extension-text-align'

export default {
  components: {
    EditorContent,
  },

  setup() {
    const editor = useEditor({
      content: "<p>I’m running tiptap with Vue.js. 🎉</p>",
      extensions: [...defaultExtensions(), Highlight,
        Typography,
        Text,
        TextAlign],
    });

    return { editor };
  },
};
</script>