<template>
  <div :class="{ dark: darkTheme }">
    <div class="cursor-pointer" @click="toggleTheme()">
      <SunIcon v-if="darkTheme" class="h-5 v-5" />
      <MoonIcon v-else class="h-5 v-5" />
    </div>

    <Dashboard />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue"
import Dashboard from "./components/Dashboard.vue"
import { useStore } from "./store"
import { MoonIcon, SunIcon } from "heroicons-vue3/solid"

export default defineComponent({
  name: "App",
  components: {
    Dashboard,
    MoonIcon,
    SunIcon,
  },
  setup() {
    const store = useStore()

    return {
      darkTheme: computed(() => store.state.ui.darkTheme),
      toggleTheme: () => store.commit("ui/toggleTheme"),
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
