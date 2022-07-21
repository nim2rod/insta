<template>
<section class="insta-app">
  <story-twenty-four :stories="stories"></story-twenty-four>
  <story-list :stories="stories"></story-list>
</section>
</template>

<script>
import storyList from "../components/story.list.vue";
import storyTwentyFour from "../components/24stories.cmp.vue";
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
    storyTwentyFour,
  },
};
</script>

<style>
</style>