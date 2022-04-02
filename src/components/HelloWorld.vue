<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>{{$t('hello')}}</span>
  </div>
</template>

<script>
  import {
    getData
  } from '@/api/test'
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    async created() {
      let res = await getData({
        id: 1
      })
      console.log(res)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
</style>