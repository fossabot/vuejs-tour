<template>
  <div class="page-container"/>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  name: 'File',
  components: {
    pdf
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.page-container {
  box-sizing: border-box;
  margin: 8px 8px;
  text-align: center;
}
</style>
