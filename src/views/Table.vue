<template>
  <div class="page-container">
    <hot-table
      :settings="settings"
      style="left:36%;"/>
  </div>
</template>
<script>
import { HotTable } from '@handsontable-pro/vue'
import 'handsontable-pro/dist/handsontable.full.min.js'
import 'handsontable-pro/languages/zh-CN.js'
import 'handsontable-pro/dist/handsontable.full.min.css'

export default {
  name: 'Table',
  components: {
    HotTable
  },
  data: function() {
    return {
      settings: {
        data: [
          ['-', 'Ford', 'Volvo', 'Toyota', 'Honda'],
          ['2017', 10, 11, 12, 13],
          ['2018', 20, 11, 14, 13],
          ['2019', 30, 15, 12, 13]
        ],
        colHeaders: true,
        rowHeaders: true,
        contextMenu: true,
        columnSorting: true,
        dropdownMenu: true
      }
    }
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
