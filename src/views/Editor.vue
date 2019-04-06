<template>
  <div class="page-container">
    <mavon-editor v-model="content" style="height: 100%" @upload="uploadImage" @change="changeMavon" />
  </div>
</template>
<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

export default {
  name: "Editor",
  data() {
    return {
      content: "",
      configs: {}
    };
  },
  components: {
    mavonEditor
  },
  methods: {
    changeMavon() {},
    uploadImage() {}
  }
};
</script>
<style scoped>
.page-container {
  box-sizing: border-box;
  margin: 8px 8px;
}

#editor {
  margin: auto;
  width: 80%;
}
</style>
