<template>
    <Registration />
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
