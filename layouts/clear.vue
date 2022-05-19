<template>
  <div>
    <div class="clear">
      <Nuxt />
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      src: 'Вход',
    };
  },

};

</script>
<style lang="scss">
  .clear{
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #E4EBF5;
  }
</style>
