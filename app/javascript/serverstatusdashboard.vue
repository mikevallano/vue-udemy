<template>
  <div class="container">
    <serverstatusheader></serverstatusheader>
    <hr>
    <serverstatusbody></serverstatusbody>
    <serverstatusdetails></serverstatusdetails>
  <hr>
  <serverstatusfooter></serverstatusfooter>
</div>
</template>

<script>
  import Serverstatusheader from './serverstatusheader.vue'
  import Serverstatusbody from './serverstatusbody.vue'
  import Serverstatusdetails from './serverstatusdetails.vue'
  import Serverstatusfooter from './serverstatusfooter.vue'

  export default {
    components: {
     Serverstatusheader,
     Serverstatusfooter,
     Serverstatusdetails,
     Serverstatusbody,
   }
 }
</script>

<style>

</style>
