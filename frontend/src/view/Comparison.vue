<template>
  <div class="contain">
    <div class="containgrid">
      <div>
        <CompCID :cid="store.LEFT_CAR" />
      </div>
      <div class="mid">
      </div>
      <div>
        <CompCID :cid="store.RIGHT_CAR" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CompCID from '@/components/ComparCID.vue'
import { useCompStore } from '@/store/index'
import { onMounted } from 'vue'


const store = useCompStore()

const test = () => {
  console.log(store.LEFT_CAR)
  console.log('>>>>>>>>>', store.getleftcar())
}

onMounted(() => {
  test()
})
</script>

<style scoped>
.contain {
  display: inline;
  display: grid;
  grid-template-rows: auto;
}

.containgrid {
  width: 100vh;
  height: 100vh;
  display: grid;
  grid-template-columns: 0.4fr 0.2fr 0.4fr;
  margin: 0 auto;
}
</style>
