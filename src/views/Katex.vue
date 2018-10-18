<template>
  <div class="katex">
    <div v-katex="{expression: '{i=1}^{k+1}i'}"></div>
  </div>
</template>

<script>
export default {
  name: "Katex"
};
</script>

<style>
.katex {
  margin-top: 36px;
}
</style>
