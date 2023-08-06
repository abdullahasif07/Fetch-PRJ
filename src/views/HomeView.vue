<template>
  <div class="home">
    <h1>WELCOME</h1>
    <router-link :to="{name: 'applicants'}">Click here to view list of applicants</router-link>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  
}
</script>
