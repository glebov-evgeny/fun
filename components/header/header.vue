<template>
  <header class="header">
    <div class="container header__container">
      <router-link to="/main" class="header__logo">
        <img src="images/header/logo.png" alt="Logo" class="header__logo" />
      </router-link>
      <!-- <button class="header__btn" @click.prevent="info">Инфо</button> -->
      <button class="header__btn" @click.prevent="logout">Выйти</button>

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
      this.$router.push('/')
    }
  }
};
</script>
