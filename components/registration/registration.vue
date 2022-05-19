<template>


    <div  class="registration">
      <transition name="title-show" mode="out-in">
        <h2 :key="formLogin" class="registration__title title">{{ formLogin ? 'Регистрация' : 'Вход' }}</h2>
      </transition>
      <form class="form" novalidate="true"  @submit="validateForm" >
          <div class="form-group">
              <label  class="form-label">
                <input v-model.trim="email" type="email" class="form-input form-input-login" placeholder="Почта" :class="emailError ? 'error' : ''"/>
                <p v-if="emailError" class="form-info">{{emailErrorInfo}}</p>
              </label>
              <label  class="form-label">
                <input v-model.trim="password" type="password" class="form-input form-input-password" placeholder="Пароль"  :class="passwordError ? 'error' : ''"/>
                <p v-if="passwordError" class="form-info">{{passwordErrorInfo}}</p>
              </label>
          </div>
          <button class="form-btn" type="submit" >Отправить</button>
          <button class="form-check" type="button" @click="formLogin = !formLogin">{{ formLogin ? '- Войти -' : '- Зарегистрироваться -' }}</button>
          <p v-if="!formLogin" class="form-text">- или войти так -</p>
          <transition name="social-show" mode="out-in">
            <div v-if="!formLogin" class="form-social-registration">
              <button type="button" class="form-social-button" @click="signInGoogle">
                <img src="images/common/icon-google-04.png" alt="icon" class="form-social-pic" />
              </button>
            </div>
          </transition>
      </form>
    </div>



</template>

<script>
import './registration.scss';

export default {
  data(){
    return{
      titlePage:'Регистрация',
      formLogin: false,
      email: null,
      emailError: false,
      emailErrorInfo: 'Укажите корректный email',
      password: null,
      passwordError: false,
      passwordErrorInfo: 'Пароль должен быть больше 7 символов',
      currentUser:{},
    }
  },
  methods: {
    validateForm(e) {
      if (this.email == null){
       this.emailError = true
      } else{
        this.validEmail(this.email)
      }

      if (this.password == null){
       this.passwordError = true
      } else{
        this.validPassword(this.password)
      }

      if( this.passwordError === false && this.emailError === false) {
        if(this.formLogin === false){
          this.loginUser()
        } else {
          this.createUser()
        }
      }
      e.preventDefault();
    },
    validEmail(email) {
      const result = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(result.test(email)){
        this.emailError = false
      } else{
        this.emailError = true
      }
    },
    validPassword(password) {
      if(this.password.length > 6){
        this.passwordError = false
      } else{
        this.passwordError = true
      }
    },
    async createUser() {
      try {
        const user = await this.$fire.auth.createUserWithEmailAndPassword(
          this.email,
          this.password,
        )
        this.$store.commit('setToken', user.user.uid)
        this.$router.push('/main')
      } catch (e) {

      }
    },
    async loginUser() {
      try {
         const user = await this.$fire.auth.signInWithEmailAndPassword(
          this.email,
          this.password,
        )
        this.$store.commit('setToken', user.user.uid)
        this.$router.push('/main')

      } catch (e) {

      }
    },
    async signInGoogle() {
      const provider = new this.$fireModule.auth.GoogleAuthProvider()
      const user = await this.$fire.auth.signInWithPopup(provider)
      this.$store.commit('setToken', user.user.uid)
      this.$router.push('/main')
    }
  }
};
</script>
