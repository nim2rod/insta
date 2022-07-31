<template>
  <section class="insta-app">
    <section class="story-and-short-box">
      <story-twenty-four :stories="stories"></story-twenty-four>
      <story-list :stories="stories"></story-list>
    </section>
    <section class="user-seggestions-main">
      <change></change>
      <suggest :users="users"></suggest>
      <copy> </copy>
    </section>
    <!-- <create-new v-if="createMode"></create-new> -->
  </section>
</template>

<script>
import change from "../components/change.cmp.vue";
import storyList from "../components/story.list.vue";
import storyTwentyFour from "../components/24stories.cmp.vue";
import suggest from "../components/suggest4u.cmp.vue";
import copy from "../components/copyright.cmp.vue";
import createNew from "../components/create.new.cmp.vue";

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
    // suggestions() {
    //   return this.$store.getters.suggestionsToDisplay;
    // },
    users() {
      return this.$store.getters.usersToDisplay;
    },
  },
  components: {
    storyList,
    storyTwentyFour,
    suggest,
    change,
    copy,
    createNew,
    // comment,
  },
};
</script>

<style>
</style>