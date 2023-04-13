<template>
  <div class="mainpage">
    <img
      src="../components/img/logo.jpg "
      alt="logo" />
    <h4>내차 찾기</h4>
 
    <div class="container">
      <div class="inner">
        <!-- 브랜드 -->
        <select
          v-model="b_text"
          class="custom b"
          @change="getCar">
          <option
            class="b"
            disable
            value="">
            브랜드를 선택해주세요
          </option>
          <option
            v-for="brand in GetData.brands"
            :key="brand"
            class="b"
            :value="brand.brand">
            <!-- v-text="brand.brand"> -->
            {{ brand.brand }}
          </option>
        </select>

        <!-- 차급 -->
        <select
          v-model="s_text"
          class="custom s"
          @change="getCar">
          <option
            class="s"
            disable
            value="">
            차급을 선택해주세요
          </option>
          <option
            v-for="segment in GetData.segment"
            :key="segment"
            class="s"
            :value="segment.segment"
            v-text="segment.segment">
          </option>
        </select>

        <!-- 차종 -->
        <select
          v-model="v_text"
          class="custom v"
          @change="getCid">
          <option
            class="v"
            disable
            value="">
            차종을 선택해주세요
          </option>
          <option
            v-for="car in GetData.car"
            :key="car"
            class="v"
            :value="car.cid"
            v-text="car.name">
          </option>
        </select>

        <button
          type="button"
          @click="handover">
          추가
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { URL } from '@/components/global'
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import router from '@/router'
import { useCompStore } from '@/store/index'

const b_text = ref('')
const s_text = ref('')
const v_text = ref('')

const store = useCompStore()

onMounted(() => {
  getBrand(), getSegment()
})



// Backend 연동
const GetData = reactive({ // brands에 넣으면 된다 (for문)
  brands: [],
  segment: [],
  car: []
})


const getBrand = async () => {

  try {
    const res = await axios.get(URL + '/brand/all')
    GetData.brands = res.data
    console.log('brand data : ', res.data)
  } catch (error) {
    console.log('브랜드 주세요', error)
  }

}

const getSegment = async () => {

  try {
    const res = await axios.get(URL + '/segment/all')
    GetData.segment = res.data
    console.log('segment data : ', res.data)
  } catch (error) {
    console.log('차급 주세요', error)
  }

}


const getCar = async () => {
  let path = '/car/search?'
  if (b_text.value != '') {
    path = path + `brand=${b_text.value}&`
  }
  if (s_text.value != '') {
    path = path + `segment=${s_text.value}&`
  }
  console.log(b_text.value + '/' + s_text.value)
  try {
    const res = await axios.get(URL + path)
    GetData.car = res.data
  } catch (error) {
    console.log('차급 주세요', error)
  }
}

const usecid = reactive({
  id: []
})
function getCid(e) {
  const get = e.target.value
  usecid.id = get
  console.log('get >> ', get)
  console.log('id >> ', usecid.id)
}

const handover = () => {
  console.log('성공? >> ', usecid.id)
  store.selectleftcar(usecid.id)
  console.log('LEFT_CID >>', store.LEFT_CAR)
  router.push({path: '/comparison'})
}

</script>

<style scoped>
.mainpage {
  background-color: black;
  width: 100%;
  height: 100vh;
}
h4 {
  color: white;
  font-weight: bold;
}
.container {
  border: 1px solid white;
  width: 950px;
  height: 250px;
  transform: translate(40%);
  margin-top: 50px;
}

.inner {
  width: 600px;
  height: 70px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.custom {
  width: auto;
  height: 50px;
  margin-right: 15px;
}

.b,
.s,
.v {
  text-align-last: center;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
}

img {
  width: 200px;
  height: 200px;
}
</style>
