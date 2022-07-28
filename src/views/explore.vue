<template>
  <section class="grid-container">
    <div
      class="img-box-for"
      v-for="explore in stories"
      :key="explore.by.username"
    >
      <div class="img-container-explore btn">
        <img @click="viewComments" :src="explore.imgUrl" alt="" />
      </div>
      <comment
        v-if="commentMode"
        @closeComments="closeComments"
        @addCommentTxt="addCommentTxt"
        @likeClicked="likedStory"
        class="comment-view-container"
        :story="explore"
        :loggedInUser="loggedInUser"
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
      // explores: null,
      commentMode: 0,
      loggedInUser: null,
      stories: null,
      newComment: null,
    };
  },
  created() {
    this.loggedInUser = storyService.getUser();
    this.newComment = storyService.getEmptyComment();
  },
  methods: {
    viewComments(story) {
      console.log("view comment");
      this.commentMode = 1;
    },
    closeComments() {
      this.commentMode = 0;
    },
    likedStory(story) {
      console.log("story-explore", story);
      const storyCopy = JSON.parse(JSON.stringify(story));
      this.$store
        .dispatch("addLike", {
          editedStory: storyCopy,
        })
        .then(() => {
          console.log("then");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addCommentTxt(commentTxt, story) {
      this.newComment.txt = commentTxt;
      this.addComment(story);
    },
    addComment(story) {
      const storyCopy = JSON.parse(JSON.stringify(story));
      this.$store
        .dispatch("addComment", {
          editedStory: storyCopy,
          newComment: this.newComment,
        })
        .then(console.log("great"))
        .catch((err) => {
          console.log(err);
        });

      this.newComment = storyService.getEmptyComment();
    },
  },
  computed: {
    stories() {
      return this.$store.getters.storiesToDisplay;
    },
  },
  components: {
    comment,
  },
};
</script>

<style>
</style>