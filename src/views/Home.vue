<template>
  <div class="home">
    <div class="mainContent">
      <h1>VueMyCocktails</h1>
      <p>{{subText}}</p>
      <Search :expanded="false"></Search>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'

export default {
  name: 'Home',
  data () { 
    return {
      subText: '',
      subtextList: 
      ["it's 5 oclock somewhere...", 
        "Celebrate your new job, with Style!",
        "You call that a Cocktail!?.... THIS is a cocktail!",
        "hey man! there's a beverage here!",
        "Shaken, not stired",
        "When I read about the evils of drinking, I gave it up. Reading, that is",
        "One martini is alright, two is too many, three is not enough",
        "One tequila, two tequila, three tequila, floor.",
        "Vodka mixes well with everything. Except decisions",
        "Drinking rum before 10am makes you a pirate, not an alcoholic"],
    }
  },
  components: {Search},
  mounted(){
    // Generate 'random' quote from our predefined list.
    this.subText = this.subtextList[Math.floor(Math.random() * this.subtextList.length)]
  },
}
</script>

<style lang="scss">
  .home {
    display: flex;
    background: #666;
    width: 100%;
    height: 100%;
    flex-grow: 1;
    align-items: center;
    justify-content: center;

    background-image: url('~@/assets/images/background_home.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;

    &:after{
      content: '';
      position: absolute;
      z-index: 0;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.7);
    }

    .mainContent {
      position: relative;
      z-index: 20;
      color: #fff;

      h1 {
        font-size: 40pt;
        cursor: default;
        font-weight: 900;
        text-shadow: 0 3px 6px rgba(0,0,0,0.9);
      }    
    }
  }
</style>
