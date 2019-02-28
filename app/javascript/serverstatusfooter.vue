<template>
  <div class="row">
    <div class="col-xs-12">
      <footer>
        <p>All Servers are managed here</p>
        <p :class="passedProp == 'Default val in parent' ? 'text-warning' : 'text-danger'">passedProp from parent: {{passedProp}}</p>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      passedProp: {
        type: String
      }
    }
  }
</script>
