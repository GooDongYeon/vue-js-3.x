<template>
  <div class="register">
    <h2>Register</h2>
    <form>
      <div class="comf">
        <label>Username : </label>
        <input
          v-model="register_data.username"
          type="text"
          placeholder="Username" />
      </div>
      <div class="comf">
        <label>Email : </label>
        <input
          v-model="register_data.email"
          type="email"
          placeholder="Email" />
      </div>
      <div class="comf">
        <label>Password : </label>
        <input
          v-model="register_data.password"
          type="password"
          placeholder="Password" />
      </div>
      <!-- <div class="comf">
        <label>Password Confirm : </label>
        <input
          v-model="register_data.password_confirm"
          type="password"
          placeholder="Password Confirm" />
      </div> -->
      <button
        type="submit"
        @click.prevent="registerUser">
        회원가입
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const register_data = reactive({
  username: '',
  email: '',
  password:'',
  // password_confirm:''
})

const registerUser = () => {
  console.log(register_data)
  const url = 'http://192.168.0.113:8080/join'
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(register_data)
  }
  fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => (this.postId = data.id))
    .catch(()=> {
      console.log('니 실패함')
    })
}
</script>

<style>
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label,
input {
  margin: 5px;
}
</style>
