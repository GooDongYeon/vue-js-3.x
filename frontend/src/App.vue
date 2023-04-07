<template>
  <Nav />
  <!-- <chBtn /> -->
  <RouterView />
</template>
  <script setup>
    import Nav from '@/components/Nav.vue'
    // import chBtn from '@/components/ChangeBtn.vue'
  </script>

  <style>
    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    }
    
    Nav {
      margin-bottom: 70px;
    }
  </style>

