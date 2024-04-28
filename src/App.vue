<template>
      <Header_Component></Header_Component>
      <Search_and_Preview></Search_and_Preview>
      <Show_Viewer></Show_Viewer>
</template>

<script>
import Header_Component from './components/Header_Component.vue'
import Search_and_Preview from './components/Search_and_Preview.vue'
import Show_Viewer from './components/Show_Viewer.vue'

export default {
  name: 'App',
  components: {
    Header_Component,
    Search_and_Preview,
    Show_Viewer,
  },
}
</script>

<style>
* {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #282828ff;
}
</style>
