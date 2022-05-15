<template>
  <button class="btn__arrow" @click="$router.go(-1)">
    <img src="images/header/arrow.png" alt="arrow" class="btn__arrow-logo" />
  </button>
</template>

<script>
import './goback.scss';

export default {
  name: 'Goback',
  
};
</script>
