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
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'

const login_data = reactive({
  username: '',
  password: '',
  // password_confirm:''
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
    .then(response => response.json())
    .then(data => (this.postId = data.id))
    .catch(() => {
      console.log('니 실패함')
    })
}

// const tokenlogin = () => {
//   console.log(login_data)
//   const url = 'http://192.168.0.113:8080/login'
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(login_data)
//   }
//   fetch(url, requestOptions)
//     .then(response => response.headers)
//     .then(data => (console.log(data)))
//     .catch(()=> {
//       console.log('니 실패함')
//     })
// }


const tokenlogin = async () => {
  console.log(login_data)
  const url = 'http://192.168.0.113:8080/login'
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(login_data),
    credentials: 'include'
  }
  // try {
  //   const res = await fetch(url, requestOptions)
  //   console.log('json', res.json())
  //   console.log('res', res)
  //   document.cookie = 'Authorization=<token>'
  //   console.log(document.cookie)
  // } catch (error) {
  //   console.log('실패', error)
  // }
  axios.post(url, requestOptions)
  .then(res => {
    console.log('json', res)
  })
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
