<template>
  <div class="container">
    <header-component></header-component>
    <hr>
    <body-component></body-component>
    <details-component></details-component>
  <hr>
  <footer-component></footer-component>
</div>
</template>

<script>
  import Serverstatusheader from './serverstatusheader.vue'
  import Serverstatusfooter from './serverstatusfooter.vue'
  import Serverstatusdetails from './serverstatusdetails.vue'
  import Serverstatusbody from './serverstatusbody.vue'

  export default {
    components: {
      'header-component': Serverstatusheader,
      'footer-component': Serverstatusfooter,
      'details-component': Serverstatusdetails,
      'body-component': Serverstatusbody,
    }
  }
</script>

<style>

</style>
