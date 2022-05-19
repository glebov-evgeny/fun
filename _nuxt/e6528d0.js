(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4],{296:function(r,t,e){var content=e(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,e(64).default)("97c28b54",content,!0,{sourceMap:!1})},297:function(r,t,e){var o=e(63)(!1);o.push([r.i,".registration{background:hsla(0,0%,100%,.3);border-left:.1rem solid hsla(0,0%,100%,.3);border-top:.1rem solid hsla(0,0%,100%,.3);-webkit-backdrop-filter:blur(1rem);backdrop-filter:blur(1rem);border-radius:3rem;box-shadow:.8rem .8rem 1.4rem #c8d0e7,-.2rem -.2rem 1.8rem #fff;text-align:center;position:relative;transition:all .2s ease-in-out;padding:4rem 2rem;width:100%;max-width:90%;margin:0 auto}@media(min-width:576px){.registration{max-width:40rem}}.registration__title{color:#000}.registration .form,.registration .form-group{display:flex;flex-direction:column}.registration .form-group{align-items:flex-start}.registration .form-label{width:100%;text-align:left;margin-bottom:1rem}.registration .form-label:last-child{margin:0}.registration .form-info{font-size:1.4rem;color:#ff1c1c;margin:.5rem auto 0}.registration .form-input{display:flex;width:100%;min-height:5rem;border:none;border-radius:1rem;outline:none;font-size:1.4rem;font-weight:500;color:#000;padding:1rem 2rem;box-shadow:inset .2rem .2rem .5rem #c8d0e7,inset -.2rem -.2rem .5rem #fff;background:none;transition:.3s}.registration .form-input:focus{outline:none;box-shadow:.3rem .3rem .6rem #c8d0e7,-.2rem -.2rem .5rem #fff}.registration .form-input.error{box-shadow:inset .2rem .2rem .5rem #ffcdfe,inset -.2rem -.2rem .5rem #fff;color:#ff1c1c}.registration .form-input.error::-moz-placeholder{color:#ff1c1c}.registration .form-input.error:-ms-input-placeholder{color:#ff1c1c}.registration .form-input.error::placeholder{color:#ff1c1c}.registration .form-btn{display:flex;align-items:center;justify-content:center;width:100%;min-height:5rem;border-radius:1rem;border:none;background:#6d5dfc;font-size:1.6rem;font-weight:600;letter-spacing:.2rem;text-transform:uppercase;color:#fff;margin:2.5rem auto 0;box-shadow:inset .2rem .2rem 1rem #8abdff,inset -.2rem -.2rem 1rem #5b0eeb,.3rem .3rem .6rem #c8d0e7,-.2rem -.2rem .5rem #fff;transition:.3s ease}.registration .form-btn:active{box-shadow:inset .2rem .2rem 1rem #5b0eeb,inset -.2rem -.2rem 1rem #8abdff}.registration .form-check{color:#1a00ff}.registration .form-check,.registration .form-text{font-size:1.2rem;margin:2rem auto 0}.registration .form-social-registration{margin-top:1.5rem}.registration .form-social-button{width:2.5rem;margin:0 1.5rem}.title-show-enter-active{-webkit-animation:show .3s ease forwards;animation:show .3s ease forwards}@-webkit-keyframes show{0%{opacity:0;transform:translateY(-1.5rem)}to{opacity:1;transform:translateY(0)}}@keyframes show{0%{opacity:0;transform:translateY(-1.5rem)}to{opacity:1;transform:translateY(0)}}.social-show-enter-active{-webkit-animation:showSocial .3s ease forwards;animation:showSocial .3s ease forwards}@-webkit-keyframes showSocial{0%{opacity:0;transform:translateY(1.5rem)}to{opacity:1;transform:translateY(0)}}@keyframes showSocial{0%{opacity:0;transform:translateY(1.5rem)}to{opacity:1;transform:translateY(0)}}",""]),r.exports=o},300:function(r,t,e){"use strict";e.r(t);var o=e(9),n=(e(33),e(30),e(296),{data:function(){return{titlePage:"Регистрация",formLogin:!1,email:null,emailError:!1,emailErrorInfo:"Укажите корректный email",password:null,passwordError:!1,passwordErrorInfo:"Пароль должен быть больше 7 символов",currentUser:{}}},methods:{validateForm:function(r){null==this.email?this.emailError=!0:this.validEmail(this.email),null==this.password?this.passwordError=!0:this.validPassword(this.password),!1===this.passwordError&&!1===this.emailError&&(!1===this.formLogin?this.loginUser():this.createUser()),r.preventDefault()},validEmail:function(r){/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r)?this.emailError=!1:this.emailError=!0},validPassword:function(r){this.password.length>6?this.passwordError=!1:this.passwordError=!0},createUser:function(){var r=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$fire.auth.createUserWithEmailAndPassword(r.email,r.password);case 2:e=t.sent,r.$store.commit("setToken",e.user.uid),r.$router.push("/main");case 5:case"end":return t.stop()}}),t)})))()},loginUser:function(){var r=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$fire.auth.signInWithEmailAndPassword(r.email,r.password);case 2:e=t.sent,r.$store.commit("setToken",e.user.uid),r.$router.push("/main");case 5:case"end":return t.stop()}}),t)})))()},signInGoogle:function(){var r=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var e,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new r.$fireModule.auth.GoogleAuthProvider,t.next=3,r.$fire.auth.signInWithPopup(e);case 3:o=t.sent,r.$store.commit("setToken",o.user.uid),r.$router.push("/main");case 6:case"end":return t.stop()}}),t)})))()}}}),m=e(26),component=Object(m.a)(n,(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{staticClass:"registration"},[e("transition",{attrs:{name:"title-show",mode:"out-in"}},[e("h2",{key:r.formLogin,staticClass:"registration__title title"},[r._v(r._s(r.formLogin?"Регистрация":"Вход"))])]),r._v(" "),e("form",{staticClass:"form",attrs:{novalidate:"true"},on:{submit:r.validateForm}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:r.email,expression:"email",modifiers:{trim:!0}}],staticClass:"form-input form-input-login",class:r.emailError?"error":"",attrs:{type:"email",placeholder:"Почта"},domProps:{value:r.email},on:{input:function(t){t.target.composing||(r.email=t.target.value.trim())},blur:function(t){return r.$forceUpdate()}}}),r._v(" "),r.emailError?e("p",{staticClass:"form-info"},[r._v(r._s(r.emailErrorInfo))]):r._e()]),r._v(" "),e("label",{staticClass:"form-label"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:r.password,expression:"password",modifiers:{trim:!0}}],staticClass:"form-input form-input-password",class:r.passwordError?"error":"",attrs:{type:"password",placeholder:"Пароль"},domProps:{value:r.password},on:{input:function(t){t.target.composing||(r.password=t.target.value.trim())},blur:function(t){return r.$forceUpdate()}}}),r._v(" "),r.passwordError?e("p",{staticClass:"form-info"},[r._v(r._s(r.passwordErrorInfo))]):r._e()])]),r._v(" "),e("button",{staticClass:"form-btn",attrs:{type:"submit"}},[r._v("Отправить")]),r._v(" "),e("button",{staticClass:"form-check",attrs:{type:"button"},on:{click:function(t){r.formLogin=!r.formLogin}}},[r._v(r._s(r.formLogin?"- Войти -":"- Зарегистрироваться -"))]),r._v(" "),r.formLogin?r._e():e("p",{staticClass:"form-text"},[r._v("- или войти так -")]),r._v(" "),e("transition",{attrs:{name:"social-show",mode:"out-in"}},[r.formLogin?r._e():e("div",{staticClass:"form-social-registration"},[e("button",{staticClass:"form-social-button",attrs:{type:"button"},on:{click:r.signInGoogle}},[e("img",{staticClass:"form-social-pic",attrs:{src:"images/common/icon-google-04.png",alt:"icon"}})])])])],1)],1)}),[],!1,null,null,null);t.default=component.exports},309:function(r,t,e){"use strict";e.r(t);var o={components:{Registration:e(300).default},layout:"clear",data:function(){return{title:"Вход"}}},n=e(26),component=Object(n.a)(o,(function(){var r=this.$createElement;return(this._self._c||r)("Registration")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Registration:e(300).default})}}]);