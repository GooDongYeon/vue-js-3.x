<template>
  <div class="container-md">
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :autoplay="{
        delay: 1000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      effect="fade"
      :slides-per-view="3"
      :space-between="20"
      :speed="1200"
      navigation
      :parallax="true"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      :slide-change="onSlideChange"
      @swiper="onSwiper">
      <swiper-slide class="wrap-swiper">
        <div
          class="title"
          data-swiper-parallax="-200">
          Becoming One in Love<br />
          Growing Leaders<br />
          Helping People to Serve God<br /><br />
          <div class="subtitle">
            We Are OICA
          </div>
        </div>

        <img
          src="../assets/swiper/bmw.jpg"
          alt=""
          class="swiper-img" />
      </swiper-slide>
      <swiper-slide class="wrap-swiper">
        <div
          class="title"
          data-swiper-parallax="-200">
          사랑으로 하나되는 학교 <br />
          리더를 세워가는 학교 <br />
          섬김으로 봉사하는 학교 <br /><br />
          <div class="subtitle">
            우리는 OICA입니다
          </div>
        </div>
        <img
          src="../assets/swiper/그랜져.jpg"
          alt=""
          class="swiper-img" />
      </swiper-slide>
      <swiper-slide class="wrap-swiper">
        <div
          class="title"
          data-swiper-parallax="-200">
          Growing Global Leaders<br />
          in God's Words. <br /><br />
          <div class="subtitle">
            We Are OICA
          </div>
        </div>
        <img
          src="../assets/swiper/멕라렌.png"
          alt=""
          class="swiper-img" />
      </swiper-slide>
      <swiper-slide class="wrap-swiper">
        <div
          class="title"
          data-swiper-parallax="-200">
          하나님 말씀 안에서<br />
          글로벌 리더 양성<br /><br />
          <div class="subtitle">
            우린 OICA입니다
          </div>
        </div>
        <img
          src="../assets/swiper/스팅어.png"
          alt=""
          class="swiper-img" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, EffectFade, Autoplay, Parallax } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'

const onSwiper = (swiper) => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log('slide change')
}

const modules = [Navigation, Pagination, Scrollbar, EffectFade, Autoplay, Parallax]
</script>

<style scoped>
.container-md {
  max-width: 1020px;
  margin: 0 auto;
  margin-top: 10px;
  padding: 0 15px;
}
.wrap-swiper {
  position: relative;
  font-family: 'Roboto', 'Noto Sans KR', sans-serif;
}

.wrap-swiper img {
  filter: brightness(40%);
  z-index: 1;
  width: 100%;
  height: 600px;
}

.wrap-swiper .title {
  font-size: 30px;
  position: absolute;
  z-index: 1;
  top: 30%;
  left: 10%;
  color: white;
}

.wrap-swiper .title .subtitle {
  font-size: 30px;
  /* position: absolute; */
  color: white;
}

/* @media (max-width: 1000px) {
  .wrap-swiper .title {
    font-size: 25px;
    position: absolute;
    z-index: 1;
    color: white;
    left: 15%;
  }

  .wrap-swiper .title .subtitle {
    font-size: 20px;
    position: absolute;
    color: white;
  }

  .wrap-swiper img {
    width: 800px;
  }
} */
</style>
