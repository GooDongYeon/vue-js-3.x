<template>
  <div class="main-container">
    <User />
    <div class="logo">
      <router-link to="/">
        <img
          src="@/components/img/logo2.png"
          alt="" />
      </router-link>
    </div>
    <Nav2 />
    <Slider />
    <Selected />
  </div>
  <!-- <RouterView /> -->
</template>

<script setup>
import User from '@/components/Userpage.vue'
import Nav2 from '@/components/NewNav.vue'
import Slider from '@/components/swiperslider.vue'
import Selected from '@/components/NewSelect.vue'

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Open+Sans:ital,wght@0,300;0,600;1,300;1,600&family=Poor+Story&family=Poppins:wght@300;400;500;600;700&display=swap');
@import '@/assets/main.css';

.main-container {
  width: 100%;
  height: 150vh;
}
</style>
