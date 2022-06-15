<template>
  <div class="drinks">
    <PreLoader :data="results"/>
    <div class="main" v-if="results.length > 0">
      <div class="mainContent">
        <DrinkCard :item="results[0]" :single="true"></DrinkCard>
        <p class="homeLink">Not your style, try <router-link to="/">Something Different...</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import PreLoader from '@/components/PreLoader.vue'
import DrinkCard from '@/components/DrinkCard.vue'

export default {
  name: 'Drink',
  data () {
    return {
      results: [],
    }
  },
  components: {PreLoader, DrinkCard},
  async mounted() {
    this.results = await this.drinkLookup(this.$route.params.drinkID)
  },
  watch:{
  '$route' (){
      this.results = this.drinkLookup(this.$route.params.drinkID)
    }
  },
  methods: {
    async drinkLookup(ID){
      let data = await this.$store.dispatch('search/searchID', { Id: ID })
      if(data){
        console.log(data)
        return data.data.drinks
      }else{
        return []
      }
      
    }
  }
}
</script>

<style scoped lang="scss">
  .drinks {
    display: flex;
    background: #f1f1f1;
    flex-grow: 1;
    padding-top: 60px;
    align-items: center;
    justify-content: center;
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
    p.homeLink {
      margin: 20px auto;
      width: 100%;
      a {
        opacity: 0.8;
        text-decoration: underline;
        &:hover {
          opacity: 1;
        }
      }
    }
  }

  @media screen and (max-width: 650px){
    .drinks {
      padding: 40px 0;
    }
  }

</style>