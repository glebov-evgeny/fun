<template>
  <div class="container">
      <Users :users="users" :title="title" />
  </div>
</template>

<script>
import Users from '~/components/users/users';

export default {
  components: {
    Users,
  },
  // async asyncData({ $axios }) {
  //   const usersData = await $axios.$get('https://jsonplaceholder.typicode.com/users');
  //   return { usersData };
  // },
  data() {
    return {
      title: 'Список сотрудников',
    };
  },
  async fetch({store}){
    if (store.getters['users/users'].length === 0 ) {
      await store.dispatch('users/fetch');
    }
  },
  computed:{
    users() {
      return this.$store.getters['users/users']
    }
  },
};
</script>
