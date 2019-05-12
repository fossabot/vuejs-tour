<template>
  <el-container id="app">
    <el-header><app-header></app-header></el-header>
    <el-main>
      <router-view></router-view>
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
<style scoped="css"></style>
