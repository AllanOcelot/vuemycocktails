<template>
  <div class="drinks">
    <div class="preloader" v-if="!results || results.length === 0">
      <b-spinner type="grow" label="Loading..." v-if="results.length !== 0"></b-spinner>
      <h2 v-if="results.length === 0">
        No Results found,
      </h2>
      <p>Let's find something to wet your Whistle!</p>
      <div class="searchWrapper">
        <Search></Search>
      </div>
    </div>

    <div class="main" v-if="results.length > 0">
      <h1 v-if="results">Showing {{results.length}} results for '{{searchTerm}}'</h1>

      <div class="mainContent">
        <div class="drinkContainer"
          v-for="(item, index) in results"
          :key="index"
        >
          <DrinkCard :item="item" :index="index"></DrinkCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import DrinkCard from '@/components/DrinkCard.vue'

export default {
  name: 'Drinks',
  data () {
    return {
      loading: true,
      searchTerm: '',
    }
  },
  components: {Search, DrinkCard},
  computed: {
    favouritesList () {
      return this.$store.getters['favourites/getFavouritesIDList']
    },
    results () {
      const data = this.$store.getters['search/getResults'];
      if(data){
        return data
      }else{
        return []
      }

    }
  },
  mounted() {
    this.searchTerm = this.$route.params.searchterm
  },
  watch:{
  '$route' (){
      this.searchTerm = this.$route.params.searchterm
    }
  },
}
</script>

<style scoped lang="scss">
  .drinks {
    display: flex;
    background: #f1f1f1;
    flex-grow: 1;
    padding-top: 60px;
  }

  .preloader {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 10;
    .searchWrapper {
      width: 600px;
    }
  }

  .main {
    flex: 1;
    h1 {
      font-family: 'Dancing Script', cursive;
      padding: 40px 20px;
      font-size: 40pt;
      margin: 0; 
    }
  }

  .mainContent {
    display: flex;
    flex-wrap: wrap;

    .drinkContainer {
      flex-grow: 1;
      flex-basis: 25%;
      padding: 20px;
      justify-content: center;
    }
  }

</style>