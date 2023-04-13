<template>
  <div class="contain">
    <div class="containgrid">
      <div>
        <CompCID cid="1" />
      </div>
      <div class="mid">
      </div>
      <div>
        <CompCID />
      </div>
    </div>
  </div>
</template>

<script setup>
import CompCID from '@/components/ComparCID.vue'
</script>

<style scoped>
.contain {
  display: inline;
}
.containgrid {
  width: 100vh;
  height: 100vh;
  display: grid;
  grid-template-columns: 0.4fr 0.2fr 0.4fr;
  margin: 0 auto;
}
</style>
