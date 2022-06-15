<template>
  <header :class="{'inverse' : inverse == true}">
    <router-link to="/" id="logo">
      VueMyCocktails
    </router-link>


    <div class="alignRight">
      <a href="https://github.com/AllanOcelot/vuemycocktails" target="_blank" class="github">View Source</a>
      <Favourites />
    </div>

  </header>
</template>

<script>
import Favourites from '@/components/Favourites.vue'

export default {
  name: 'Nav',
  props: {
    inverse: Boolean
  },
  components: {Favourites}
}
</script>

<style scoped lang="scss">
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 20px;
    background: #fff;
    border-bottom: 1px solid #14294d52;
    position: fixed;
    height: 60px;
    left:0;
    top:0;
    right: 0;
    z-index: 10;

    a {
      color: #0C1E3B;
    }

    #logo {
      font-family: 'Dancing Script', cursive;
      align-self: flex-start;
      font-size: 16pt;
      opacity: 0.8;
      text-decoration: none;
      &:hover {
        opacity: 1;
      }
      transition: all 0.3s;
    }

    .alignRight{
      display: flex;
      align-items: center;
      align-self: flex-end;
    }

    .github {
      color: #0C1E3B;
      margin-right: 20px;
    }

    // inverted for dark display BG such as homepage.
    &.inverse {
      position: absolute;
      background: transparent;
      border-bottom: #f1f1f1;
      a {
        color: #f1f1f1;
      }
    }
  }

  @media screen and (max-width: 650px){
    header {
      padding: 20px 0 0 0;
      flex-direction: row;
      height: auto;
      position: relative;
      #logo {
        line-height: 35px;
        margin-right: 10px;
      }
      .alignRight {
        .github {
          display: none;
        }
      }
    }
  }

</style>
