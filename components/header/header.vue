<template>
  <header class="header">
    <div class="container header__container">
      <router-link to="/" class="header__logo">
        <img src="images/header/logo.png" alt="Logo" class="header__logo" />
      </router-link>
      <a @click.prevent="logout" href="#" class="header__btn">Выйти</a>
      <!-- <router-link to="/users" class="header__btn">Пользователи</router-link> -->
    </div>
  </header>
</template>

<script>
import './header.scss';

export default {
  name: 'Header',
  methods:{
    logout(){
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
};
</script>
