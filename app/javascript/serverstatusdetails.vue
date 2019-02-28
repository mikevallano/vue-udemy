<template>
<div class="col-xs-12 col-sm-6">
  <p>Server Details are currently not updated</p>
  <p>testProp: {{testProp}}</p>
  <p>propForPassing: {{propForPassing}}</p>
  <button class="btn btn-success" @click="changePassProp">Change da prop</button>
</div>
</template>

<script>
  export default {
    data: function() {
      return {
        propForPassing: 'initial val'
      }
    },
    props: {
      testProp: {
        type: String,
      },
    },
    methods: {
      changePassProp() {
        this.propForPassing = "changed in child"
        this.$emit('propForPassingChange', this.propForPassing) // first arg is name of custom event that parent will listen for. second arg is the value passed
      }
    }
  }
</script>
