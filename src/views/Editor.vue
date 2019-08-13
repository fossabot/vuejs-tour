<template>
  <div class="page-container">
    <mavon-editor
      v-model="content"
      style="height: 100%"
      @upload="uploadImage"
      @change="changeMavon"
    />
  </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  name: 'Editor',
  components: {
    mavonEditor
  },
  data() {
    return {
      content: '',
      configs: {}
    }
  },
  methods: {
    changeMavon() {},
    uploadImage() {}
  }
}
</script>
<style lang="scss" scoped>
.page-container {
  box-sizing: border-box;
  margin: 8px 8px;
}

#editor {
  margin: auto;
  width: 80%;
}
</style>
