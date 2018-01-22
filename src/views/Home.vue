<template>
  <div class="home-view">
    <my-header></my-header>
    <translate></translate>
  </div>
</template>

<script>
  import MyHeader from '../components/MyHeader'
  import translate from '../components/translate'
  export default {
    components: {MyHeader, translate},
    name: 'Home',
    data () {
      return {}
    }
  }
</script>

<style lang="stylus">
  .home-view {
    width 100%
    height 100%
    padding-top: 70px
    box-sizing border-box;
    transition: all .25s ease;
  }
</style>
