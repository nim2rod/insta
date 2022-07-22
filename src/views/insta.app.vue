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
    <comment v-if="commentMode" @closeComments="closeComments"></comment>
  </section>
</template>

<script>
import change from "../components/change.cmp.vue";
import storyList from "../components/story.list.vue";
import storyTwentyFour from "../components/24stories.cmp.vue";
import suggest from "../components/suggest4u.cmp.vue";
import copy from "../components/copyright.cmp.vue";
import comment from "../components/comment.mode.cmp.vue";

export default {
  data() {
    return {
      commentMode: 0,
    };
  },
  methods: {
    showCommentsMode(story) {
      console.log("appppp");
      console.log("story-emit", story);
      this.commentMode = 1;
    },
    closeComments() {
      console.log("you made it");
      this.commentMode = 0;
    },
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
    change,
    copy,
    comment,
  },
};
</script>

<style>
</style>