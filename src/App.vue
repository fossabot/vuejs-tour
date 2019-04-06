<template>
  <div id="app">
    <app-header></app-header>
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import AppHeader from "./components/Header";
export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>
<style scoped="sass">
.main-container {
  padding: 80px 0 80px;
  width: 100%;
  box-sizing: border-box;
  min-height: 100%;
}
</style>
