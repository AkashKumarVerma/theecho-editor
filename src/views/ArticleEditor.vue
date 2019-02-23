<template>
  <div class="editor">
    <ui-editor />
  </div>
</template>

<script>
import { UiEditor } from '@/components/Ui'

export default {
  name: 'Editor',
  data() {
    return {

    }
  },
  components: {
    UiEditor
  }
}
</script>

<style lang="sass" scoped>
.editor
  width: 100%
  min-height: calc(100vh - 60px)
</style>