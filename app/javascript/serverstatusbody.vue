<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <p :class="mainServerStatus == 'humming' ? 'text-success' : 'text-danger'">Main Server Status: {{mainServerStatus}}</p>
      <ul class="list-group">
        <li
        class="list-group-item"
          v-for="index in 5">
          Server #{{ index }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      mainServerStatus: {
        type: String,
      }
    }
  }
</script>
