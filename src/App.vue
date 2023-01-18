
<template>
  <section class="flex justify-center">
    <app-header></app-header>
    <router-view />
  </section>
</template>

<script>
import appHeader from "./components/header.cmp.vue";
import { userService } from "./services/user.service";
export default {
  name: "app",
  created() {
    this.$store.dispatch({ type: "loadStories" });
    this.$store.dispatch({ type: "loadUsers" });
    this.$store.dispatch({ type: "loadLoggedinUser" });
  },
  components: {
    appHeader,
  },
  methods: {},
};
</script>
