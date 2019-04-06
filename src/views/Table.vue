<template>
  <div class="page-container">
    <hot-table :settings="settings" style="left:36%;"></hot-table>
  </div>
</template>
<script>
import { HotTable } from "@handsontable-pro/vue";
import "handsontable-pro/dist/handsontable.full.min.js";
import "handsontable-pro/languages/zh-CN.js";
import "handsontable-pro/dist/handsontable.full.min.css";

export default {
  name: "HandsonTable",
  data: function() {
    return {
      settings: {
        data: [
          ["-", "Ford", "Volvo", "Toyota", "Honda"],
          ["2017", 10, 11, 12, 13],
          ["2018", 20, 11, 14, 13],
          ["2019", 30, 15, 12, 13]
        ],
        colHeaders: true,
        rowHeaders: true,
        contextMenu: true,
        columnSorting: true,
        dropdownMenu: true
      }
    };
  },
  components: {
    HotTable
  }
};
</script>
<style scoped="sass">
.page-container {
  box-sizing: border-box;
  margin: 8px 8px;
  text-align: center;
}
</style>
