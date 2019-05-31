<template>
  <div class="page-container">
    <p>常量阶 - <span v-katex="{ expression: 'O(1)' }"/></p>
    <p>对数阶 - <span v-katex="{ expression: 'O(logn)' }"/></p>
    <p>线性阶 - <span v-katex="{ expression: 'O(n)' }"/></p>
    <p>线性对数阶 - <span v-katex="{ expression: 'O(nlogn)' }"/></p>
    <p>平方阶 - <span v-katex="{ expression: 'O(n^2)' }"/></p>
    <p>立方阶 - <span v-katex="{ expression: 'O(n^3)' }"/></p>
    <p>K次方阶 - <span v-katex="{ expression: 'O(n^k)' }"/></p>
    <p>指数阶 - <span v-katex="{ expression: 'O(2^n)' }"/></p>
    <p>阶乘阶 - <span v-katex="{ expression: 'O(n!)' }"/></p>
  </div>
</template>
<script>
import 'katex/dist/katex.min.css'
import 'katex/dist/katex.min.js'

export default {
  name: 'Katex'
}
</script>
<style lang="scss" scoped>
.page-container {
  box-sizing: border-box;
  margin: 8px 8px;
  text-align: center;
}
</style>
