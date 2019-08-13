<template>
  <el-container id="app">
    <el-header>
      <app-header/>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>
<script>
import AppHeader from './components/Header'
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>
<style scoped="sass">
</style>
