<template>
  <form @submit.prevent="handleSubmit">
    <h3>로그인</h3>
  
    <div class="form-group">
      <label>Email</label>
      <input
        v-model="login_form.email"
        type="email"
        class="form-control"
        placeholder="Email을 입력하시오" />
    </div>
  
    <div class="form-group">
      <label>비밀번호</label>
      <input
        v-model="login_form.password"
        type="password"
        class="form-control"
        placeholder="비밀번호를 입력하시오" />
    </div>

    <button class="btn btn-primary btn-block">
      로그인
    </button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'


const login_form = reactive({
  email: '',
  password:'',
})

const handleSubmit = async () => {
  const response = await axios.post('/login', login_form)
  console.log(response)

  localStorage.setItem('token', response.data.token)
}
</script>

<style>
</style>
