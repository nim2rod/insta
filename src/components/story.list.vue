<template>
  <section class="list-container" v-if="stories">
    <div v-for="story in stories" :key="story._id">
      <story-card :story="story" @showComments="showComments"></story-card>
    </div>
  </section>
</template>

<script>
import storyCard from "./story.preview.vue";

export default {
  props: {
    stories: Array,
  },
  components: {
    storyCard,
  },
  data() {
    return {};
  },
  methods: {
    // showComments(story) {
    //   this.commentMode = 1;
    // },
    // closeComments() {
    //   this.commentMode = 0;
    // },
  },
};
</script>

<style>
</style>