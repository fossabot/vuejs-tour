<template>
  <div class="katex">
    <p>常量阶 - <span v-katex="{expression: 'O(1)'}"></span></p>
    <p>对数阶 - <span v-katex="{expression: 'O(logn)'}"></span></p>
    <p>线性阶 - <span v-katex="{expression: 'O(n)'}"></span></p>
    <p>线性对数阶 - <span v-katex="{expression: 'O(nlogn)'}"></span></p>
    <p>平方阶 - <span v-katex="{expression: 'O(n^2)'}"></span></p>
    <p>立方阶 - <span v-katex="{expression: 'O(n^3)'}"></span></p>
    <p>K次方阶 - <span v-katex="{expression: 'O(n^k)'}"></span></p>
    <p>指数阶 - <span v-katex="{expression: 'O(2^n)'}"></span></p>
    <p>阶乘阶 - <span v-katex="{expression: 'O(n!)'}"></span></p>
  </div>
</template>

<script>
export default {
  name: "Katex"
};
</script>

<style scoped>
.katex {
  margin-top: 12px;
}
</style>
