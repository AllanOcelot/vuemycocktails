<template>
  <b-form @submit="search">
    <b-form-group id="mainSearch" :class="{'expanded': expanded}">
      <b-form-input
        id="mainSearch"
        v-model="form.mainSearch"
        placeholder="Search your poison"
        required
        :class="{'invalidInput': !searchStringValid}"
        autocomplete="off"
      ></b-form-input>
      <span class="iconSearch">
        <BIconSearch></BIconSearch>
      </span>

      <p v-if="!searchStringValid" class="invalidInput">
        Search too short...
      </p>

      <div class="secondarySearch">
        <div class="optionBartendersChoice" @click="bartendersChoice()">
            Bartenders choice...
        </div>
      </div>

      <!-- ADDITIONAL OPTIONS FOR LISTING PAGE-->
      <div v-if="expanded">
        <div class="optionAlcoholic">
          <b-form-checkbox v-model="form.alcoholic" name="toggleAlcoholic"  switch>
            Contains Alcohol?
          </b-form-checkbox>
        </div>
      </div>
    </b-form-group>
  </b-form>
</template>

<script>
import { BIconSearch } from 'bootstrap-vue'

export default {
  name: 'Search',
  props: {
    expanded: Boolean
  },
  components: {BIconSearch},
  data () {
    return {
      searchStringValid: true,
      form: {
        mainSearch: '',
        alcoholic: false
      },
      favList: []
    }
  },
    methods: {
    async search(){
      if(this.form.mainSearch.length >= 3){
        this.searchStringValid = true
        await this.$store.dispatch('search/clearSearch')
        await this.$store.dispatch('search/searchString', {
          searchString: this.form.mainSearch
        }).then(() => {
          this.$router.push('/drinks/' + this.form.mainSearch)
        })
      }else{
        this.searchStringValid = false
      }
    },

    async bartendersChoice(){
      await this.$store.dispatch('search/clearSearch')
      await this.$store.dispatch('search/searchRandom').then((response) => {
        this.$router.push('/drink/' + response[0].idDrink)
      })
    }
  }
}
</script>


<style lang="scss">
  #mainSearch {
    position: relative;
    margin: 0;
    input{
      width: 100%;
      height: 50px;
      border-radius: 10px;
      border: 1px solid #707070;
      font-size: 20px;
      padding: 0 20px;

      &.invalidInput {
        border: 2px solid rgb(233, 53, 53);
      }
    }
    .iconSearch {
      position: absolute;
      right: 0;
      top: 0;
      width: 60px;
      height: 50px;
      text-align: center;
      font-size: 22pt;
      color: #101010;
      opacity: 0.5;
      line-height: 50px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover{
        color: #447AC1;
        opacity: 1;
      }
    }

    p.invalidInput{
      position: relative;
      z-index: -1;
      top: -10px;
      padding-top: 12px;
      padding-bottom: 4px;
      font-size: 12pt;
      color: #fff;
      background: rgb(233, 53, 53);
      border-radius: 0 0 6px 6px;
    }

    .secondarySearch {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      padding: 10px 5px 0;
      .optionBartendersChoice {
        cursor: pointer;
        opacity: 0.8;
        transition: all 0.3s;
        &:hover {
          text-decoration: underline;
          opacity: 1;
        }
      }
    }
  }
</style>
