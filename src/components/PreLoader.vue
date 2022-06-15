<template>
  <div class="preloader" v-if="!data || data.length === 0">
    <b-spinner type="grow" label="Loading..." v-if="data.length !== 0"></b-spinner>
    <h2 v-if="data.length === 0">
      No Data found,
    </h2>
    <p>Let's find something to wet your Whistle!</p>
    <div class="searchWrapper">
      <Search></Search>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
  name: 'PreLoader',
  props: {
    data: {}
  },
  components: {Search}
}
</script>


<style scoped>

</style>
