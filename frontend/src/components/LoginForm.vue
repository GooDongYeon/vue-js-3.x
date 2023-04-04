<template>
  <div class="login">
    <h2>Login</h2>
    <form>
      <div>
        <label for="username">Username:</label>
        <input
          id="username"
          v-model="login_data.username"
          type="text"
          placeholder="username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          id="password"
          v-model="login_data.password"
          type="password"
          placeholder="password" />
      </div>
      <div class="btn">
        <button
          type="submit"
          @click.prevent="loginUser">
          form 로그인
        </button>
        <button
          type="submit"
          @click.prevent="tokenlogin">
          token 로그인
        </button>

        <button
          type="submit"
          @click.prevent="userlogin">
          user 로그인
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const login_data = reactive({
  username: '',
  password: '',
})

const loginUser = () => {
  console.log(login_data)
  const url = 'http://192.168.0.113:8080/login'

  var formBody = []
  for (var property in login_data) {
    var encodedKey = encodeURIComponent(property)
    var encodedValue = encodeURIComponent(login_data[property])
    formBody.push(encodedKey + '=' + encodedValue)
  }
  formBody = formBody.join('&')


  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    body: formBody
  }
  fetch(url, requestOptions)
    .then(response => response.headers)
    .then(data => (console.log('data : ', data)))
    .catch(error => {
      console.log('니 실패함', error)
    })
}

const tokenlogin = async () => {
  console.log(login_data)
  const url = 'http://192.168.0.113:8080/api/login'
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': 'Authorization'
    },
    body: JSON.stringify(login_data),
    credentials: 'include'
  }
  try {
    const res = await fetch(url, requestOptions)
    console.log(res.headers)
    console.log(res.headers['Authorization'])
  } catch (error) {
    console.log('니 실패함', error)
  }
}

const userlogin = async () => {
  const url = 'http://192.168.0.113:8080/api/user'
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  try {
    const res = await fetch(url, requestOptions)
    console.log(res.json())
  } catch (error) {
    console.log('니 실패함', error)
  }
}
</script>

<style>
.login {
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

.btn button {
  margin-right: 20px;
}
</style>
