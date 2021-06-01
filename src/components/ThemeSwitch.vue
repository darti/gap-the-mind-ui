<template>
  <div class="cursor-pointer" @click="toggleTheme()">
    <sun-icon v-if="darkTheme" class="h-5 v-5" />
    <moon-icon v-else class="h-5 v-5" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watchEffect } from "vue"
import { MoonIcon, SunIcon } from "heroicons-vue3/solid"
import { useStore } from "../store"

export default defineComponent({
  components: {
    MoonIcon,
    SunIcon,
  },
  setup() {
    const store = useStore()

    const darkTheme = computed(() => store.state.ui.darkTheme)

    watchEffect(() => {
      if (darkTheme.value) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    })

    return {
      darkTheme,
      toggleTheme: () => store.commit("ui/toggleTheme"),
    }
  },
})
</script>
