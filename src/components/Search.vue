<template>
  <b-form @submit="search">
    <b-form-group id="mainSearch" :class="{'expanded': expanded}">
      <b-form-input
        id="mainSearch"
        v-model="form.mainSearch"
        placeholder="Search your poison"
        required
      ></b-form-input>
      <span class="iconSearch">
        <BIconSearch></BIconSearch>
      </span>

      <div class="secondarySearch">
        <div class="optionAlcoholic">
          <b-form-checkbox v-model="form.alcoholic" name="toggleAlcoholic"  switch>
            Contains Alcohol?
          </b-form-checkbox>
        </div>
        <div class="optionBartendersChoice" @click="bartendersChoice()">
            Bartenders choice...
        </div>
      </div>

      <!-- ADDITIONAL OPTIONS FOR LISTING PAGE-->
      <div v-if="expanded">
        additional options here
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
      form: {
        mainSearch: '',
        alcoholic: false
      }
    }
  },
    methods: {
    search(){
      console.log('do search via store')
    },

    bartendersChoice(){
      //TODO: When clicked, search for random drink etc
    }
  }
}
</script>


<style lang="scss">
  #mainSearch {
    position: relative;
    margin: 0;
    input{
      width: 550px;
      height: 50px;
      border-radius: 10px;
      border: 1px solid #707070;
      font-size: 20px;
      padding: 0 20px;
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

    .secondarySearch {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      padding: 10px 5px 0;
      .optionAlcoholic {
        align-self: flex-start;
        overflow: hidden;
        .custom-control-label {
          cursor: pointer;
        }
      }
      .optionBartendersChoice {
        align-self: flex-end;
        text-align: right;
        cursor: pointer;
      }
    }
  }
</style>
