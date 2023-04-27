<template>
  <!-- <Nav /> -->
  <!-- {{ store.count }}
  <button @click="store.increment">
    증가
  </button> -->
  <testpage />
  <RouterView />
</template>
<script setup>
// import Nav from '@/components/Nav.vue'
import testpage from '@/view/MainPageFrm.vue'
// import { useCountStore } from '@/store/index'

// const store = useCountStore()
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

Nav {
  margin-bottom: 70px;
}
</style>

