<template>
  <div class="home-view">
    <my-header></my-header>
  </div>
</template>

<script>
  import MyHeader from '../components/MyHeader'
  export default {
    components: {MyHeader},
    name: 'home',
    data () {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  .home-view {
    height 100%
    padding-top: 70px
    box-sizing border-box;
    -webkit-transition: all .25s ease;
    transition: all .25s ease;
  }
</style>
