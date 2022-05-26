<template>
  <div class="container">
      <Search />
  </div>
</template>

<script>

import Search from "~/components/search/search";

export default {
  components: {
    Search
  },
  middleware: 'auth',
};
</script>
