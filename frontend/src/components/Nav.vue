<template>
  <nav class="navbar navbar-expand">
    <div class="container">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a
              href="#"
              class="nav-link">user</a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link">admin</a>
          </li>
          <li class="nav-item">
            <router-link to="/login">
              login
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register">
              register
            </router-link>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link">logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// import Login from './LoginForm.vue'
// import Register from './RegisterForm.vue'

</script>

<style>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
}

ul li {
  margin-right: 30px;
}

.navbar {
  display: flex;
  margin-left: 38%;
}
</style>
