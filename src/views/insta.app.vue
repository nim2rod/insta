<template>
  <h2>insa-app</h2>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    stories() {
      return this.$store.getters.storiesToDisplay;
    },
  },
  components: {},
};
</script>

<style>
</style>