<template>
  <div class="login">
    <h2 class="user__title title">{{ titlePage }}</h2>
    <form class="form" @submit.prevent="onSubmit">
        <div class="form-group">
          <input type="text" class="form-input" placeholder="логин"/>
        </div>
        <button class="form-btn" type="submit">Отправить</button>
        <p class="form-info"></p>
    </form>
  </div>
</template>

<script>
import './registration.scss';

export default {
  name: 'Registration',
  methods:{
    onSubmit(){
      this.$store.dispatch('login')
      // this.$router.push('/')
    }
  }
};
</script>
