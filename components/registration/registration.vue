<template>
  <div class="registration">
    <h2 class="registration__title title">{{ formLogin ? 'Регистрация' : 'Вход' }}</h2>
    <form class="form">

        <div class="form-group">
            <input type="email" class="form-input form-input-login" placeholder="Почта" v-model.trim="email"/>
            <input type="password" class="form-input form-input-password" placeholder="Пароль" v-model.trim="password"/>
        </div>
        <button v-if="formLogin" class="form-btn" type="button" @click="createUser">Отправить</button>
        <button v-else class="form-btn" type="button" @click="loginUser">Войти</button>
        <button class="form-info" type="button" @click="formLogin = !formLogin">{{ formLogin ? '- Вход -' : '- Регистрация -' }}</button>
    </form>
  </div>
</template>

<script>
import './registration.scss';

export default {
  data(){
    return{
      titlePage:'Регистрация',
      formLogin: true,
      email: '',
      password: '',
    }
  },
  methods: {
    async createUser() {
      try {
        await this.$fire.auth.createUserWithEmailAndPassword(
          this.email,
          this.password,
          this.$router.push('/users')
        )
      } catch (e) {

      }
    },
    async loginUser() {
      try {
        await this.$fire.auth.signInWithEmailAndPassword(
          this.email,
          this.password
        );
        this.$router.push("/user/1");
      } catch (e) {
      }
    }
  }
};
</script>
