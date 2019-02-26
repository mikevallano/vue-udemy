import Vue from 'vue/dist/vue.esm'
import Serverstatusdashboard from '../serverstatusdashboard.vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#servers',
    data: {
      message: "Can you say hello?"
    },
    components: { Serverstatusdashboard }
  })
})
