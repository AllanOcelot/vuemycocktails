<template>
  <div class="drinks">
    <PreLoader :data="results" />
    <div class="main" v-if="results.length > 0">
      <h1 v-if="results">Showing {{results.length}} Results For '{{searchTerm}}'</h1>
      <div class="mainContent">
        <div class="drinkContainer"
          v-for="(item, index) in results"
          :key="index"
        >
          <DrinkCard :item="item"></DrinkCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PreLoader from '@/components/PreLoader.vue'
import DrinkCard from '@/components/DrinkCard.vue'

export default {
  name: 'Drinks',
  data () {
    return {
      searchTerm: '',
    }
  },
  components: {PreLoader, DrinkCard},
  computed: {
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

  @media screen and (max-width: 650px){
    .drinks {
      padding: 20px 0;
      .main {
        h1 {
          padding: 0 20px;
          font-size: 30pt;
        }
      }
      .mainContent .drinkContainer {
        flex-basis: 100%;
      }
    }
  }

</style>