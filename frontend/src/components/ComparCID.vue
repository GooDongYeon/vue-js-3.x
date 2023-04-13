<template>
  <div class="cidcontain">
    <div class="image-box">
      <button v-if="!isimg">
        추가하기 {{ isimg }}
      </button>
      <img
        v-if="isimg"
        class="imginner"
        :src="'/img' + InfoData.specifications.imgurl" />
    </div>
    <div class="spec">
      <hr />
      <div class="spectitle">
        요약
      </div>
      <div class="specinner">
        요약 넣는곳
      </div>
    </div>
    <div class="spec">
      <hr />
      <div class="spectitle">
        제원
      </div>
      <div class="specinner">
        제원 넣는곳
      </div>
    </div>
    <div class="opt">
      <hr />
      <div class="opttitle">
        옵션
      </div>
      <div class="optinner">
        옵션 넣는곳이요
      </div>
    </div>
  </div>
</template>

<script setup>
import { URL } from '@/components/global'
import { onMounted, reactive, ref } from 'vue'
import axios from 'axios'
import { defineProps } from 'vue'

const props = defineProps({
  cid: Number
})

// true ==> 이미지가 보이게 하고, false ==> button이 보이게한다.
const isimg = ref(false)


onMounted(() => {
  getInfo(), getcid()
})

function getcid() {
  return props.cid
}
const InfoData = reactive({ // brands에 넣으면 된다 (for문)
  specifications: {
    imgurl: '/no.jpg',
  }
})

const getInfo = async () => {
  console.log('id >>', props.cid)
  if (props.cid == '') {
    return
  } else {
    isimg.value = true
  }
  try {
    const res = await axios.get(URL + `/car/search/car?cid=${props.cid}`)
    InfoData.specifications = res.data
    console.log('specifications data : ', res.data)
  } catch (error) {
    console.log('제원 주세요', error)
  }

}
</script>

<style scoped>
.cidcontain {
  height: 100vh;
  border: 1px solid black;
  display: grid;
  grid-template-rows: auto;
}

.spectitle,
.opttitle {
  width: 100%;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 30px;
  margin-left: 10px;
}

.image-box {
  text-align: center;
  margin: auto;
}

.imginner {
  min-width: 200px;
  min-height: 200px;
}

hr {
  border: 3px double black;
}
</style>
