<template>
  <section class="grid-container">
    <div
      class="img-box-for"
      v-for="explore in stories"
      :key="explore.by.username"
    >
      <div class="img-container-explore btn">
        <img @click="viewComments(explore)" :src="explore.imgUrl" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
import { storyService } from "../services/story.service";
export default {
  data() {
    return {
      loggedInUser: null,
      newComment: null,
    };
  },
  created() {
    this.loggedInUser = this.$store.getters.getUser;

    this.newComment = storyService.getEmptyComment();
  },
  methods: {
    viewComments(story) {
      this.$router.push(`/explore/story/${story._id}`);
    },
    closeComments() {
      this.$router.push(`/explore`);
    },
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