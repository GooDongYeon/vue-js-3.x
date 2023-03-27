<template>
  <h3 v-if="user">
    Hi, {{ user.first_name }} {{ user.last_name }}
  </h3>
  <h3 v-if="!user">
    Hello
  </h3>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const user = ref(null)
onMounted(() => {
  created
})
const created = async () => {
  const response = await axios.get('user')

  console.log(response)
  user.value = response.data
}

</script>

<style></style>
