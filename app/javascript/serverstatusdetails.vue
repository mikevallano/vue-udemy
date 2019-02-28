<template>
<div class="col-xs-12 col-sm-6">
  <p>Server Details are currently not updated</p>
  <p>testProp: {{testProp}}</p>
  <p :class="propForPassing == 'Default val in child' ? 'text-warning' : 'text-danger'">propForPassing: {{propForPassing}}</p>
  <button class="btn btn-success" @click="changePassProp">Change da prop</button>
</div>
</template>

<script>
  export default {
    data: function() {
      return {
        propForPassing: 'Default val in child'
      }
    },
    props: {
      testProp: {
        type: String,
      },
    },
    methods: {
      changePassProp() {
        this.propForPassing = "Prop changed from child!"
        this.$emit('propForPassingChange', this.propForPassing) // first arg is name of custom event that parent will listen for. second arg is the value passed
      }
    }
  }
</script>
