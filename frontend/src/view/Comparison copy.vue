<template>
  <div class="container">
    <div class="coninner">
      <table>
        <tr class="innerimg">
          <td class="image1">
            img1
          </td>
          <td class="v-img">
            차량
          </td>
          <td class="image2">
            img2
          </td>
        </tr>
        <!-- 요약 part -->
        <tr>
          <td
            class="specifications"
            colspan="3">
            요약
          </td>
        </tr>
        <tr>
          <td>
            15,000,000
          </td>
          <td>
            가격
          </td>
          <td>
            20,000,000
          </td>
        </tr>
        <tr>
          <td>
            준중형 세단
          </td>
          <td>
            차종
          </td>
          <td>
            준중형 세단
          </td>
        </tr>
        <tr>
          <td>
            2023.01.01
          </td>
          <td>
            출시일
          </td>
          <td>
            2023.02.01
          </td>
        </tr>
        <tr>
          <td>
            가솔린
          </td>
          <td>
            연료
          </td>
          <td>
            LPG
          </td>
        </tr>
        <tr>
          <td>
            15.3km/L
          </td>
          <td>
            연비
          </td>
          <td>
            15.2km/L
          </td>
        </tr>

        <!-- 제원 part -->
        <tr>
          <td
            class="specifications"
            colspan="3">
            제원
          </td>
        </tr>
        <tr>
          <td>
            4,710mm / 1,825mm
          </td>
          <td>
            전장 / 전폭
          </td>
          <td>
            4,645mm / 1,800mm
          </td>
        </tr>
        <tr>
          <td>
            경차
          </td>
          <td>
            차종
          </td>
          <td>
            중형차
          </td>
        </tr>
        <tr>
          <td>
            2023.01.01
          </td>
          <td>
            출시일
          </td>
          <td>
            2023.02.01
          </td>
        </tr>
        <tr>
          <td>
            가솔린
          </td>
          <td>
            연료
          </td>
          <td>
            LPG
          </td>
        </tr>
        <tr>
          <td>
            17.5km/L
          </td>
          <td>
            연비
          </td>
          <td>
            20.0km/L
          </td>
        </tr>

        <!-- 옵션 part -->
        <tr>
          <td
            class="specifications"
            colspan="3">
            옵션
          </td>
        </tr>
        <tr>
          <td>
            <input
              v-model="options"
              :value="options.coldseat"
              type="checkbox"
              name="통풍"
              @click="pulscheck" /> 통풍시트
          </td>
          <td rowspan="6">
            옵션
          </td>
          <td>
            <input
              v-model="options"
              :value="options.coldseat"
              type="checkbox"
              name="통풍"
              @click="pulscheck" /> 통풍시트
          </td>
        </tr>
        <tr>
          <td>
            <input
              v-model="options"
              :value="options.hotseat"
              type="checkbox"
              name="열선"
              @click="pulscheck" /> 열선시트
          </td>
          <td>
            <input
              v-model="options"
              :value="options.hotseat"
              type="checkbox"
              name="열선" /> 열선
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="checkbox"
              name="썬루프" /> 썬루프
          </td>
          <td>
            <input
              type="checkbox"
              name="썬루프" /> 썬루프
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="checkbox"
              name="휠" /> 휠 업그레이드
          </td>
          <td>
            <input
              type="checkbox"
              name="휠" /> 휠 업그레이드
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="checkbox"
              name="주행보조" /> 주행보조 시스템
          </td>
          <td>
            <input
              type="checkbox"
              name="주행보조" /> 주행보조 시스템
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="checkbox"
              name="네비" /> 네비화면 업그레이드
          </td>
          <td>
            <input
              type="checkbox"
              name="네비" /> 네비화면 업그레이드
          </td>
        </tr>

        <!-- 가격 part -->
        <tr>
          <td
            class="specifications"
            colspan="3">
            총 금액
          </td>
        </tr>
        <tr>
          <td>
            15,000,000 + {{ options.coldseat }}
          </td>
          <td>
            총 금액
          </td>
          <td>
            20,000,000
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const options = reactive({
  coldseat: '2,000,000',
  hotseat: '2,000,000',
  sunroof: '1,000,000',
  wheel: '1,000,000', //휠 업그레이드
  da: '800,000', // 주행보조
  navscreen: '500,000' // 네비
})

const pulscheck = () => {
  console.log('체크함')
  console.log(options.coldseat)
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  position: relative;
}

.coninner {
  position: absolute;
  transform: translate(50%);
}

table {
  border-spacing: 50px 5px;
}

.v-img {
  width: 50px;
  height: 50px;
}

.image1,
.image2 {
  width: 300px;
  height: 300px;
  border: 1px solid black;
}

.specifications {
  width: 100%;
  height: 15px;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 5px;
}
</style>
