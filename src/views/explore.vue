<template>
  <section class="grid-container">
    <div
      class="img-box-for"
      v-for="explore in explores"
      :key="explore.by.username"
    >
      <div class="img-container-explore btn">
        <img @click="viewComments" :src="explore.imgUrl" alt="" />
      </div>
      <comment
        v-if="commentMode"
        @closeComments="closeComments"
        class="comment-view-container"
        :story="explore"
      ></comment>
    </div>
  </section>
</template>

<script>
import comment from "../components/comment.mode.cmp.vue";
import { storyService } from "../services/story.service";
export default {
  data() {
    return {
      explores: null,
      commentMode: 0,
    };
  },
  created() {
    this.explores = storyService.createExploreStory();
    console.log("explore", this.explores);
  },
  methods: {
    viewComments(story) {
      console.log("view comment");
      this.commentMode = 1;
    },
    closeComments() {
      this.commentMode = 0;
    },
  },
  components: {
    comment,
  },
};
</script>

<style>
</style>