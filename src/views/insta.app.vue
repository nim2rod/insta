<template>
  <story-list :stories="stories"></story-list>
</template>

<script>
import storyList from "../components/story.list.vue";
export default {
  data() {
    return {};
  },
  computed: {
    stories() {
      console.log(
        "this.$store.getters.storiesToDisplay",
        this.$store.getters.storiesToDisplay
      );
      return this.$store.getters.storiesToDisplay;
    },
  },
  components: {
    storyList,
  },
};
</script>

<style>
</style>