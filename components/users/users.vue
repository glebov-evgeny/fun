<template>
  <div class="users">
    <!-- <Goback /> -->
    <h2 class="users__title title">{{ titlePage }}</h2>
    <div class="users__block">
      <a v-for="item in items" :key="item.id" class="users__item" href="#" @click.prevent="openUser(item)">
        <div class="users__item-photo">
          <span>{{ userInitials(item.name) }}</span>
          <img :src="urlImg(item.id)" />
        </div>
        <div class="users__item-name">
          {{ item.name }}
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import './users.scss';
// import Goback from '~/components/goback/goback';

export default {
  name: 'Users',
    components: {
    // Goback,
  },
  props: {
    title: {
      type: String,
      default: 'Список сотрудников',
    },
    users: {
      type: Array,
      default: () => [
        {
          name: 'name',
        },
      ],
    },
  },
  data() {
    return {
      titlePage: this.title,
      items: this.users,
      imgUrlProp: '111'
    };
  },
  methods: {
    userInitials(nameUser) {
        const words = nameUser.split(' ');
        const arr = [];
        // eslint-disable-next-line no-restricted-syntax
        for (const word of words) {
          const letter = word[0].toUpperCase();
          arr.push(letter);
        }
        const result = arr.join('');
        return result;  
    },
    urlImg(props) {
      return `images/users/${props}.svg`;
    },
    openUser(item) {
      this.$router.push(`/users/${item.id}`);
    },
  },
};
</script>
