<template>
  <div class="container">
    <serverstatusheader></serverstatusheader>
    <hr>
    <button class="btn btn-warning" @click="changeServerStatus">Change Server Status</button>
    <p :class="passedProp == 'Default val in parent' ? 'text-warning' : 'text-danger'">{{passedProp}}</p>
    <serverstatusbody :mainServerStatus="mainServerStatus"></serverstatusbody>
    <serverstatusdetails testProp="testerinozingo" @propForPassingChange="updatePropFromChild"></serverstatusdetails>
  <hr>
  <serverstatusfooter :passedProp="passedProp"></serverstatusfooter>
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
        mainServerStatus: 'humming',
        passedProp: 'Default val in parent'
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
    updatePropFromChild(val){
      this.passedProp = val
    },
   }
 }
</script>

<style>

</style>
