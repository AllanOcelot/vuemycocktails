<template>
  <header :class="{'inverse' : inverse}">
    <router-link to="/" id="logo">
      VueMyCocktails
    </router-link>


    <b-nav>
      <b-nav-item>Github</b-nav-item>
      <b-nav-item>Designs</b-nav-item>
    </b-nav>
  </header>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    inverse: Boolean
  }
}
</script>

<style scoped lang="scss">
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    border-bottom: 1px solid #0C1E3B;

    position: absolute;
    left:0;
    top:0;
    z-index: 10;


    a {
      color: #0C1E3B;
    }

    #logo {
      align-self: flex-start;
      font-size: 16pt;
      opacity: 0.8;
      text-decoration: none;
      &:hover {
        opacity: 1;
      }
      transition: all 0.3s;
    }

    .nav {
      align-self: flex-end;
      color: #0C1E3B;
    }

    // inverted for dark display BG such as homepage.
    &.inverse {
      border-bottom: #f1f1f1;
      a {
        color: #f1f1f1;
      }
    }
  }
</style>
