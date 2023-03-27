<template>
  <form @submit.prevent="handleSubmit">
    <h3>회원가입</h3>

    <div class="form-group">
      <label>성</label>
      <input
        v-model="register_data.first_name"
        type="text"
        class="form-control"
        placeholder="성을 입력하시오" />
    </div>

    <div class="form-group">
      <label>이름</label>
      <input
        v-model="register_data.last_name"
        type="text"
        class="form-control"
        placeholder="이름을 입력하시오" />
    </div>

    <div class="form-group">
      <label>Email</label>
      <input
        v-model="register_data.email"
        type="email"
        class="form-control"
        placeholder="Email을 입력하시오" />
    </div>

    <div class="form-group">
      <label>비밀번호</label>
      <input
        v-model="register_data.password"
        type="password"
        class="form-control"
        placeholder="비밀번호를 입력하시오" />
    </div>

    <div class="form-group">
      <label>비밀번호 확인</label>
      <input
        v-model="register_data.password_confirm"
        type="password"
        class="form-control"
        placeholder="비밀번호를 확인하시오" />
    </div>

    <button class="btn btn-primary btn-block">
      회원가입
    </button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'
import router from '@/router'

const register_data = reactive({
  first_name: '',
  last_name: '',
  email: '',
  password:'',
  password_confirm:''
})

const handleSubmit = async () => {
  console.log('submit', register_data)

  const response =  await axios.post('/register', register_data)
  console.log(response)
  router.push('/login')
} 


</script>

<style></style>
