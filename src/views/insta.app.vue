<template>
  <section class="insta-app">
    <section class="story-and-short-box">
      <story-twenty-four :stories="stories"></story-twenty-four>
      <story-list :stories="stories"></story-list>
    </section>
    <section class="user-seggestions-main">
      <suggest :suggestions="suggestions"></suggest>
    </section>
  </section>
</template>

<script>
import storyList from "../components/story.list.vue";
import storyTwentyFour from "../components/24stories.cmp.vue";
import suggest from "../components/suggest4u.cmp.vue";
export default {
  data() {
    return {};
  },
  computed: {
    stories() {
      return this.$store.getters.storiesToDisplay;
    },
    suggestions() {
      return this.$store.getters.suggestionsToDisplay;
    },
  },
  components: {
    storyList,
    storyTwentyFour,
    suggest,
  },
};
</script>

<style>
</style>