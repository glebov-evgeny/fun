<template>
  <div>
    <div class="clear">
      <Nuxt />
      <video id="background-video" autoplay loop muted poster="images/clear/bg.jpg">
        <source src="images/clear/video.mp4" type="video/mp4">
      </video>
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
      #background-video {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
      }
  }
</style>
