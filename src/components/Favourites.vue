<template>
  <b-dropdown text="Your Favourites" class="favourites">
    <div class="dropdown-text" v-if="!favouritesList || favouritesList.length === 0">
      <p>You have not added any favourites</p>
    </div>


    <div class="dropdownItem" v-for="(item, index) in favouritesList" :key="index">
      <div class="image" :style="{ backgroundImage: 'url(' + item.strDrinkThumb + ')' }"></div>
      <div class="content">
        <p><router-link :to="`/drink/${item.idDrink}`">{{item.strDrink}}</router-link></p>
        <span class="remove" @click="removeFave(item)">
          <BIconBookmarkX />
        </span>
      </div>
    </div>
  </b-dropdown>
</template>

<script>
import { BIconBookmarkX } from 'bootstrap-vue'

export default {
  name: 'Favourites',
  components: {BIconBookmarkX},
  computed: {
    favouritesList () {
      return this.$store.getters['favourites/getFavourites']
    }
  },
  methods: {
  removeFave(item){
    this.$store.dispatch(`favourites/removeItem`, {
      object: item
    }).then(() => {
        this.$bvToast.toast(`Cocktail removed in Favourites`, {
          title: `${item.strDrink} removed in favourites`,
          variant: 'warning',
          toaster: 'b-toaster-bottom-center',
          autoHideDelay: 2500,
          appendToast: true
        })
    })
  }
}
}
</script>

<style lang="scss">
  .favourites {
    .dropdown-menu.show {
      padding: 0;
    }
    // YES! I know this is awful, but I don't have time to over specify Bootstrap-vue's JS injection of styles :( !
    ul.dropdown-menu.show {
      transform: none !important;
      right: 0px !important;
      left: auto !important;
      top: 35px !important;
      @media screen and (max-width: 650px){
        left: auto !important;
      }
    }
    .dropdown-text {
      display: flex;
      width: 300px;
      padding: 20px 20px 0 20px;
      text-align: center;
      align-items: center;
    }
    .dropdownItem{
      display: flex;
      align-items: center;
      width: 100%;
      width: 300px;
      padding: 10px 70px 10px 20px;
      border-bottom: 1px solid rgba(0,0,0,0.05);
      position: relative;
      transition: 0.3s;
      .image {
        width: 50px;
        height: 50px;
        background: #f1f1f1;
        background-size: cover;
        background-position: center center;
      }
      .content {
        display: flex;
        flex: 1;
        flex-grow: 1;
        padding-left: 10px;

        p {
          font-size: 11pt;
          margin: 0;
        }

        span.remove {
          text-align: center;
          position: absolute;
          top: 0;
          right: 0;
          width: 50px;
          height: 70px;
          line-height: 70px;
          cursor: pointer;
          &:hover {
            color: red;
            opacity: 1;
          }
        }
      }

      &:hover {
        background: #f1f1f1;
      }
    }
  }
</style>
