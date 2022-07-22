
<template>
  <section>
    <app-header></app-header>
    <router-view />
  </section>
</template>

<script>
import appHeader from "./components/header.cmp.vue";
export default {
  name: "app",
  created() {
    this.$store.dispatch({ type: "loadStories" }).then(() => {});
    this.$store.dispatch({ type: "loadSuggest4u" }).then(() => {});
  },
  components: {
    appHeader,
  },
};
</script>
