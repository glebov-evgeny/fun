<template>
  <div>
    <Header />
    <div class="main">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from '~/components/header/header';

export default {
  components: {
    Header,
  },
};
</script>
