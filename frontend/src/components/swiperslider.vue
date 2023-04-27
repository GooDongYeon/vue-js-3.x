<template>
  <div class="container-md">
    <swiper
      ref="swiperRef"
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      effect="fade"
      :slides-per-view="1"
      :speed="1200"
      navigation
      :parallax="true"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      :slide-change="onSlideChange">
      <swiper-slide
        v-for="image in images"
        :key="image"
        class="wrap-swiper">
        <div
          class="title"
          data-swiper-parallax="-200">
          {{ image.title }}<br /><br />
          <div class="subtitle">
            We Are OICA
          </div>
        </div>
        <img
          :src="image.src"
          alt=""
          class="swiper-img" />
      </swiper-slide>
    </swiper>
    <div class="button-container">
      <div
        class="prev-button"
        @click="onPrevClick">
      </div>
      <div
        class="next-button"
        @click="onNextClick">
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Navigation, Pagination, Scrollbar, EffectFade, Autoplay, Parallax } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'

const swiperRef = ref(null)

const onSlideChange = () => {
  console.log('slide change')
}

const onPrevClick = () => {
  if (swiperRef.value) {
    swiperRef.value.slidePrev()
  }
}

const onNextClick = () => {
  if (swiperRef.value) {
    swiperRef.value.slideNext()
  }
}

const images = reactive([
  {
    title: 'Becoming One in Love\nGrowing Leaders\nHelping People to Serve God',
    src: '../swiper/bmw.jpg',
  },
  {
    title: '사랑으로 하나되는 학교\n리더를 세워가는 학교\n섬김으로 봉사하는 학교',
    src: '../swiper/그랜져.jpg',
  },
  {
    title: 'Growing Global Leaders\nin God\'s Words.',
    src: '../swiper/멕라렌.png',
  },
  {
    title: '하나님 말씀 안에서\n글로벌 리더 양성',
    src: '../swiper/스팅어.png',
  },
])

const modules = [Navigation, Pagination, Scrollbar, EffectFade, Autoplay, Parallax]
</script>

<style scoped>
.container-md {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 15px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.prev-button,
.next-button {
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
}

.prev-button:hover,
.next-button:hover {
  color: #ccc;
}

.swiper-img {
  width: 100%;
}

.title {
  font-size: 3rem;
  line-height: 1.2;
  font-weight: bold;
  text-align: center;
  color: #fff;
  margin-top: 80px;
  margin-bottom: 40px;
}

.subtitle {
  font-size: 2rem;
  font-weight: normal;
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.8);
}
</style>
