<template>
<div class="container">
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Search Launch" aria-label="Recipient's username" aria-describedby="basic-addon2">
    <div class="input-group-append">
       <router-link to="/" class="routerLink"><button type="button" class="btn btn-primary">Go!</button></router-link>
    </div>
  </div>    
</div>
</template>

<script>
export default {};
</script>

<style scoped>
input {
  height: 41px;
  font-size: 1.2rem;
}
</style>

