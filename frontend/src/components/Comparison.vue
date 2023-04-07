<template>
  <div>
    차량비교
  </div>
  <div>
    <div class="carimg">
      <img
        :src="'/img' + InfoData.specifications.imgurl"
        alt="avantte" />
    </div>
    <ul>
      <li>배기(cc) : {{ InfoData.specifications.capacity }}</li>
      <li>가격(won) : {{ InfoData.specifications.cost }}</li>
      <li>연비(km/L) : {{ InfoData.specifications.fuel_efficiency }}</li>
      <li>차량 : {{ InfoData.specifications.name }}</li>
      <li>브랜드 : {{ InfoData.specifications.brand }}</li>
      <li>엔진 : {{ InfoData.specifications.engine }}</li>
      <li>차급 : {{ InfoData.specifications.segment }}</li>
    </ul>
  </div>
  
  <table class="infoTable">
    <div class="carimg">
      <img
        :src="'/img' + InfoData.specifications.imgurl"
        alt="avantte" />
      <tr>
        <th id="sumyTabs">
          요약
        </th>
      </tr>
      <tr
        id="leftunitSumy1"
        class="leftUnitRow leftInitUnitRow">
        <td>가격</td>
        <td>{{ InfoData.specifications.cost }}</td>
      </tr>
      <tr
        id="leftunitSumy3"
        class="leftUnitRow leftInitUnitRow">
        <td>차종</td>
        <td>{{ InfoData.specifications.segment }}</td>
      </tr>
      <tr
        id="leftunitSumy5"
        class="leftUnitRow leftInitUnitRow">
        <td>연료</td>
        <td>{{ InfoData.specifications.engine }}</td>
      </tr>
      <tr
        id="leftunitSumy6"
        class="leftUnitRow leftInitUnitRow">
        <td>연비</td>
        <td>{{ InfoData.specifications.fuel_efficiency }}</td>
      </tr>
      <tr
        id="leftunitSumy7"
        class="leftUnitRow leftInitUnitRow"> 
        <td>배기</td>
        <td>{{ InfoData.specifications.capacity }}</td>
      </tr>
    </div>
  </table>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import axios from 'axios'
import router from '@/router'

const route = useRoute()
const cid = route.query.cid

onMounted(() => {
  getInfo()
})

const InfoData = reactive({ // brands에 넣으면 된다 (for문)
  specifications: []
})

const url = 'http://192.168.0.113:9000'
const getInfo = async () => {
  console.log('id >>', cid)
  if (cid == '') {
    alert('잘못된 데이터입니다.')
    router.push({ path: '/home' })
  }
  try {
    const res = await axios.get(url + `/car/search/car?cid=${cid}`)
    InfoData.specifications = res.data
    console.log('specifications data : ', res.data)
  } catch (error) {
    console.log('제원 주세요', error)
  }

}
</script>

<style>

</style>
