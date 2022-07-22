<template>
  <section class="insta-app">
    <section class="story-and-short-box">
      <story-twenty-four :stories="stories"></story-twenty-four>
      <story-list
        :stories="stories"
        @showComments="showCommentsMode"
      ></story-list>
    </section>
    <section class="user-seggestions-main">
      <change></change>
      <suggest :suggestions="suggestions"></suggest>
      <copy> </copy>
    </section>
  </section>
</template>

<script>
import change from "../components/change.cmp.vue";
import storyList from "../components/story.list.vue";
import storyTwentyFour from "../components/24stories.cmp.vue";
import suggest from "../components/suggest4u.cmp.vue";
import copy from "../components/copyright.cmp.vue";

export default {
  data() {
    return {};
  },
  methods: {},
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
    change,
    copy,
    // comment,
  },
};
</script>

<style>
</style>