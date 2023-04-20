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
            <router-link to="/inquiry">
              고객센터
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/reply">
              댓글
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>
<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
}

ul li {
  margin-right: 30px;
}

.container {
  width: 100%;
  background: #fff;
  border-radius: 6px;
  padding: 20px 60px 40px 40px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  justify-content: center;
  display: flex;
  transform: translate(50% 50%);
}
  .navbar {
    width: 100%;
    display: flex;
    justify-items: center;
    transform: translate(50% 50%);
  }

  a {
    text-decoration: none;
    color: black;
    margin-right: 15px;
  }
</style>
