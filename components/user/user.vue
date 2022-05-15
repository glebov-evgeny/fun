<template>
  <div class="user">
    <Goback />
    <h2 class="user__title title">{{ titlePage }}</h2>

    <div class="user__card">
      <div class="user__card-photo">
        <img :src="urlImg(user.id)" />
      </div>
      <div class="user__card-content">
        <p class="user__card-text">Имя: <span>{{user.name}}</span></p>
        <p class="user__card-text">Почта: <span>{{user.email}}</span></p>
        <p class="user__card-text">Сайт: <span>{{user.website}}</span></p>
        <p class="user__card-text">Город: <span>{{user.address.city}}</span></p>
        <p class="user__card-text">Улица: <span>{{user.address.street}}</span></p>
        <p class="user__card-text">Апартаменты: <span>{{user.address.suite}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import './user.scss';
import Goback from '~/components/goback/goback';

export default {
  name: 'User',
  components: {
    Goback,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    currentUser: {
      type: Object,
      default: () => {},
    }
  },
  data() {
    return {
      titlePage: this.title,
      user: this.currentUser,
    };
  },
  methods: {
    urlImg(props) {
      return `images/users/${props}.svg`;
    },
  },
};
</script>
