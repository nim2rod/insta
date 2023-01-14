<template>
  <section class="insta-app">
    <section class="story-and-short-box">
      <story-twenty-four v-if="stories" :stories="stories"></story-twenty-four>
      <story-list v-if="stories" :stories="stories"></story-list>
    </section>
    <section class="user-seggestions-main">
      <change></change>
      <suggest v-if="users" :users="users"></suggest>
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
    return {
      createMode: 1,
    };
  },
  methods: {},
  computed: {
    stories() {
      return this.$store.getters.storiesToDisplay;
    },
    users() {
      return this.$store.getters.usersToDisplay;
    },
    created() {},
  },
  components: {
    storyList,
    storyTwentyFour,
    suggest,
    change,
    copy,
  },
};
</script>

<style>
</style>