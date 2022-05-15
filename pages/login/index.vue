<template>
  <div class="container">
      <Login :title="title" />
  </div>
</template>

<script>
import Login from '~/components/login/login';


export default {
  
  components: {
    Login,
  },
  layout:'clear',
  data() {
    return {
      title: 'Логин',
    };
  },
};
</script>
