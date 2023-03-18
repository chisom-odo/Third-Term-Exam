<template>
  <card />
</template>

<script>
import card from "./card.vue";
export default {
  name: "RepoList",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  components: {
    card,
  },
};
</script>
