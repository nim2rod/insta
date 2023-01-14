
<template>
  <section class="flex justify-center">
    <app-header></app-header>
    <router-view />
  </section>
</template>

<script>
import appHeader from "./components/header.cmp.vue";
export default {
  name: "app",
  created() {
    this.$store.dispatch({ type: "loadStories" }).then((stories) => {});
    this.$store.dispatch({ type: "loadUsers" }).then((users) => {});
  },
  components: {
    appHeader,
  },
};
</script>
