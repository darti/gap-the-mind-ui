<template>
<span>{{tag}}</span>
</template>

<script lang="ts">
import { defineComponent , toRefs} from 'vue'


interface Props {
  tag: string
}

export default defineComponent({
    setup(props:Props) {
        const {tag} = toRefs(props)

        return {tag}
    },
})
</script>
