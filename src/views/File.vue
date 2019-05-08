<template>
  <div id="page-container">
    <div id="buttons">
      <el-button
        type="primary"
        icon="el-icon-arrow-left"
        @click="page > 1 ? page-- : 1"
        >上一页</el-button
      >&nbsp;&nbsp;
      <a class="ui active item">{{ page }} / {{ numPages ? numPages : '∞' }}</a
      >&nbsp;&nbsp;
      <el-button type="primary" @click="page < numPages ? page++ : 1"
        >下一页<i class="el-icon-arrow-right el-icon--right"></i
      ></el-button>
    </div>
    <pdf
      :src="pdfData"
      v-for="i in numPages"
      :key="i"
      :id="i"
      :page="i"
      :scale.sync="scale"
      style="width:100%;margin:20px auto;"
    >
      <template slot="loading"
        >loading</template
      >
    </pdf>
  </div>
</template>
<script>
import pdfVuer from 'pdfvuer'
import $ from 'jquery'

export default {
  name: 'File',
  components: {
    pdf: pdfVuer
  },
  data() {
    return {
      page: 1,
      numPages: 0,
      pdfData: undefined,
      errors: [],
      scale: 'page-width'
    }
  },
  computed: {
    formattedZoom() {
      return Number.parseInt(this.scale * 100)
    }
  },
  mounted() {
    this.getPdf()
  },
  watch: {
    show: function(s) {
      if (s) {
        this.getPdf()
      }
    },
    page: function(p) {
      if (
        window.pageYOffset <= this.findPos(document.getElementById(p)) ||
        (document.getElementById(p + 1) &&
          window.pageYOffset >= this.findPos(document.getElementById(p + 1)))
      ) {
        document.getElementById(p).scrollIntoView()
      }
    }
  },
  methods: {
    getPdf() {
      var self = this
      self.pdfData = pdfVuer.createLoadingTask(
        'http://localhost:3000/1016D75CEB1E4209BCD95DB88E483C66.PDF'
      )
      self.pdfData.then(pdf => {
        self.numPages = pdf.numPages
        window.onscroll = function() {
          changePage()
          stickyNav()
        }

        // Get the offset position of the navbar
        var sticky = $('#buttons')[0].offsetTop

        // Add the sticky class to the self.$refs.nav when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function stickyNav() {
          if (window.pageYOffset >= sticky) {
            $('#buttons')[0].classList.remove('hidden')
          } else {
            $('#buttons')[0].classList.add('hidden')
          }
        }

        function changePage() {
          var i = 1,
            count = Number(pdf.numPages)
          do {
            if (
              window.pageYOffset >= self.findPos(document.getElementById(i)) &&
              window.pageYOffset <= self.findPos(document.getElementById(i + 1))
            ) {
              self.page = i
            }
            i++
          } while (i < count)
          if (window.pageYOffset >= self.findPos(document.getElementById(i))) {
            self.page = i
          }
        }
      })
    },
    findPos(obj) {
      return obj.offsetTop
    }
  }
}
</script>
<style scoped="sass">
.page-container {
  box-sizing: border-box;
  margin: 8px 8px;
  text-align: center;
}

#buttons {
  margin-left: 0 !important;
  margin-right: 0 !important;
  text-align: center;
}
</style>
