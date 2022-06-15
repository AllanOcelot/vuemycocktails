<template>
<div class="drinkCard" v-if="item">
  <div class="drinkImage" :style="{ backgroundImage: 'url(' + item.strDrinkThumb + ')' }">
    <b-button v-if="!favouritesList.includes(item.idDrink)" @click="toggleFave('add', index)">
      <BIconBookmarkStar></BIconBookmarkStar>
    </b-button>
    <b-button v-else @click="toggleFave('remove', index)" class="inFavourites">
      <BIconBookmarkStarFill></BIconBookmarkStarFill>
    </b-button>
  </div>
  <p class="title">
    {{item.strDrink}}
  </p>
  <div class="additionalDetails">
    <p>
      Category:
      <span>{{item.strCategory}}</span>
    </p>
    <p>
      Alcoholic:
      <span>{{item.strAlcoholic}}</span>
    </p>
    <p>
      Glass:
      <span>{{item.strGlass}}</span>
    </p>
  </div>
  <div class="actions">
    <b-button :to="`/drink/${item.idDrink}`" class="readMore">
      View Drink
    </b-button>
  </div>
</div>
</template>

<script>
import { BIconBookmarkStarFill, BIconBookmarkStar } from 'bootstrap-vue'

export default {
  name: 'Drinks',
  props: {
    item: Object,
    index: Number,
  },
  computed: {
    favouritesList () {
      return this.$store.getters['favourites/getFavouritesIDList']
    }
  },
  components: {BIconBookmarkStar, BIconBookmarkStarFill},
  methods: {
    toggleFave(type){
      this.$store.dispatch(`favourites/${type}Item`, {
        object: this.item
      }).then(() => {
        console.log('Added item to favourites in store.')
      })
    }
  }
}
</script>


<style scoped lang="scss">
.drinkCard{
  display: flex; 
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
  background: #fff;
  border-radius: 15px 15px 0 0;
  border: 2px solid #ebebeb;
  overflow: hidden;
  .drinkImage {
    width: 100%;
    height: 250px;
    background-size: cover;
    background-position: center center;
    position: relative;

    .btn {
      position: absolute;
      bottom: 0;
      right: 0;
      background: orange;
      border: none;
      opacity: 0.85;
      border-radius: 6px 0 0 0;
      transition: all 0.2s;
      outline: none;
      &:focus {
        box-shadow: none;
      }
      &:hover {
        opacity: 1;
      }
      &.inFavourites {
        opacity: 1;
        background: rgb(64, 206, 64);
        &:hover {
          background: rgb(194, 26, 26);
        }
      }
    }
  }

  .title {
    font-family: 'Dancing Script', cursive;
    font-size: 18pt;
    padding: 8px 0 5px 0;
    margin: 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    cursor: default;
  }
  
  .additionalDetails {
    padding: 5px 20px;
    p {
      cursor: default;
      margin: 0 0 2px 0;
      font-size: 12pt;
      text-align: left;
      padding: 10px 0px;
      border-bottom: 1px solid rgba(0,0,0,0.05);
      font-weight: 600;
      span {
        font-weight: 400;
        text-align: right;
        float: right;
      }
      &:last-of-type{
        border-bottom: none;
      }
    }
  }
  .actions {
    .btn {
      width: 100%;
      background: #58cf58;
      font-size: 14pt;
      font-weight: 600;
      border: none;
      opacity: 0.9;
      &.readMore {
        border-radius: 0;
      }
    }
  }
}
</style>
