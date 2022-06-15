<template>
  <header :class="{'inverse' : inverse == true}">
    <router-link to="/" id="logo">
      VueMyCocktails
    </router-link>


    <div class="alignRight">
      <b-nav>
        <b-nav-item>Github</b-nav-item>
        <b-nav-item>Designs</b-nav-item>
      </b-nav>

      <b-dropdown text="Your Favourites" class="m-2">
        <div class="dropdownItem">
          <div class="example"></div>
          <div class="content">
            <p>Drink Name</p>

          </div>
        </div>
        <b-dropdown-text>And this is more example text.</b-dropdown-text>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item-button>First item</b-dropdown-item-button>
        <b-dropdown-item-button>Second Item</b-dropdown-item-button>
      </b-dropdown>
    </div>

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
    padding: 0 20px;
    background: #fff;
    border-bottom: 1px solid #0C1E3B;
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

    .nav {
      color: #0C1E3B;
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
</style>
