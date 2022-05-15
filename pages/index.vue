<template>
  <div class="container">
    <Registration />
  </div>
</template>

<script>
import Registration from '~/components/registration/registration';

export default {
  components: {
    Registration
  },
  layout:'clear',
  data() {
    return {
      title: 'Вход',
    };
  },
};
</script>
