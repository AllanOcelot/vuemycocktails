<template>
  <div id="app">
    <Nav :inverse="isHome"></Nav>
    <div class="main-body-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  data: function(){
    return { 
      isHome: true,
    }
  },
  components: {Nav},
  watch:{
  '$route' (){
      if(this.$route.name !== "Home") this.isHome = false
    }
  },
}
</script>

<style lang="scss">
  // Import Roboto globally.
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  html {
      height: 100%;
      margin: 0;
  }
  body {
      display: flex;
      min-height: 100%;
      margin: 0;
  }

  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    height: auto;
    width: 100%;

    .main-body-content {
      display: flex;
      flex-grow: 1;
    }
  }
</style>
