<template>
  <div class="container">
    <User :currentUser="users" :title="title" />
  </div>
</template>

<script>
import User from '~/components/user/user';

export default {
  components: {
    User,
  },
  data() {
    return {
      title: 'Сотрудник',
    };
  },
  async fetch({store}){
    if (store.getters['users/users'].length === 0 ) {
      await store.dispatch('users/fetch');
    }
  },
  computed:{
    users() {
      const currentId = this.$route.params.id - 1;
      return this.$store.getters['users/users'][currentId]
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
