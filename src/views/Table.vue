<template>
  <div class="table-container">
    <hot-table :settings="settings"></hot-table>
  </div>
</template>
<script>
import { HotTable } from "@handsontable-pro/vue";
import "handsontable-pro/dist/handsontable.full.min.js";
import "handsontable-pro/languages/zh-CN.js";

export default {
  name: "HandsonTable",
  data: function() {
    return {
      settings: {
        data: [
          ["", "Ford", "Volvo", "Toyota", "Honda"],
          ["2016", 10, 11, 12, 13],
          ["2017", 20, 11, 14, 13],
          ["2018", 30, 15, 12, 13]
        ],
        colHeaders: true,
        rowHeaders: true,
        contextMenu: true,
        columnSorting: true,
        dropdownMenu: true,
        debug: true,
        filters: true,
        copyPaste: {
          columnsLimit: 25,
          rowsLimit: 50,
          pasteMode: "shift_down"
        }
      }
    };
  },
  components: {
    HotTable
  },
  method() {}
};
</script>
<style scoped>
@import "../../node_modules/handsontable-pro/dist/handsontable.full.min.css";

.table-container {
  margin-top: 6px;
  text-align: center;
}
</style>
