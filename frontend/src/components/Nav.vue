<template>
  <nav class="navbar navbar-expand navbar-light fixed-top">
    <div class="container">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/home">
              홈
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/comparison">
              비교
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login">
              로그인
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register">
              회원가입
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/loginfrm">
              New 로그인 폼
            </router-link>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link">커뮤니티</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>

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
  margin-left: 35%;
}

a {
  text-decoration: none;
  color: black;
  margin-right: 15px;
}
</style>
