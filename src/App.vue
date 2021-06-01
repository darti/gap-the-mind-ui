<template>
  <div class="h-full app-main">
    <theme-switch />
    <dashboard />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue"
import Dashboard from "./components/Dashboard.vue"
import { useStore } from "./store"
import ThemeSwitch from "./components/ThemeSwitch.vue"

export default defineComponent({
  name: "App",
  components: {
    Dashboard,
    ThemeSwitch,
  },
  setup() {},
})
</script>

<style>
</style>
