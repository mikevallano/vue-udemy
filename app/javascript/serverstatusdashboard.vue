<template>
  <div class="container">
    <serverstatusheader></serverstatusheader>
    <hr>
    <button class="btn btn-warning" @click="changeServerStatus">Change Server Status</button>
    <serverstatusbody :mainServerStatus="mainServerStatus"></serverstatusbody>
    <serverstatusdetails testProp="testerinozingo"></serverstatusdetails>
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
    data: function(){
      return {
        mainServerStatus: 'humming'
      }
    },
    components: {
     Serverstatusheader,
     Serverstatusfooter,
     Serverstatusdetails,
     Serverstatusbody,
   },
   methods: {
    changeServerStatus() {
      this.mainServerStatus = "BORKED!"
    },
   }
 }
</script>

<style>

</style>
