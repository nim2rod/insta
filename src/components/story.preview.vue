<template>
  <section v-if="story" class="story-card">
    <!-- TOP -->
    <div class="top-card">
      <div class="flex left-top-card">
        <router-link class="router-link" :to="'/user/' + story.by._id">
          <img class="profile-pic-card" :src="profileImgSrc" />
        </router-link>
        <div class="username-bar">
          <div class="username-top-card font1">
            <router-link class="router-link" :to="'/user/' + story.by._id">{{
              story.by.username
            }}</router-link>
          </div>
          <div class="loc-card font1">{{ location }}</div>
        </div>
      </div>
      <div class="three-dots-preview">...</div>
    </div>
    <!-- DATA -->
    <div class="data-card">
      <img class="img-story" :src="imgSrc" />
    </div>

    <!-- ACTION -->
    <div class="action-card layout-card">
      <div class="like-comment">
        <svg
          aria-label="Like"
          class="_ab6-"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"
          ></path>
        </svg>
        <svg
          aria-label="Comment"
          class="_ab6-"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
        </svg>
        <svg
          aria-label="Share Post"
          class="_ab6-"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <line
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            x1="22"
            x2="9.218"
            y1="3"
            y2="10.083"
          ></line>
          <polygon
            fill="none"
            points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
          ></polygon>
        </svg>
      </div>
      <svg
        class="save-post-icon"
        aria-label="Save"
        color="#262626"
        fill="#262626"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <polygon
          fill="none"
          points="20 21 12 13.44 4 21 4 3 20 3 20 21"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></polygon>
      </svg>
    </div>

    <!-- LIKE TXT -->
    <div class="liked-bar layout-card font1">140 likes</div>
    <div class="content layout-card">
      <div class="username-bottom-card font1">
        <router-link class="router-link" :to="'/user/' + story.by._id">
          {{ story.by.username }}
        </router-link>
      </div>
      <div class="font1 card-txt">{{ story.txt }}</div>
    </div>

    <!-- COMMENTS -->
    <div class="comments layout-card btn font1" @click="viewComments(story)">
      View all {{ story.comments.length }} comments
    </div>
    <div class="time-ago layout-card font1">5 hours ago</div>
    <div class="add-comment-bar layout-card font1">
      <div class="flex add-coment-smily">
        <svg
          aria-label="Emoji"
          class="_ab6-"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"
          ></path>
        </svg>

        <input
          v-if="typingMode"
          v-model="newComment.txt"
          type="text"
          placeholder="add a comment.."
          clearable
        />

        <div v-if="!typingMode" @click="typing" class="add-comment">
          Add a comment
        </div>
      </div>
      <div @click="addComment" class="post-btn-crd">Post</div>
    </div>
    <!-- COMMENT-CMP -->
    <comment
      v-if="commentMode"
      @closeComments="closeComments"
      class="comment-view-container"
      :story="story"
    ></comment>
  </section>
</template>

<script>
import comment from "../components/comment.mode.cmp.vue";
import { storyService } from "../services/story.service";

export default {
  props: {
    story: Object,
  },
  components: {
    comment,
  },

  data() {
    return {
      commentMode: 0,
      typingMode: 0,
      newComment: "",
      editedStory: null,
    };
  },
  methods: {
    viewComments(story) {
      console.log("view comment");
      this.commentMode = 1;
    },
    closeComments() {
      this.commentMode = 0;
    },
    addComment() {
      console.log("ad comment to story:", this.newComment);
      console.log("editedStory", this.editedStory);

      this.$store
        .dispatch("addComment", {
          editedStory: this.editedStory,
          newComment: this.newComment,
        })
        .then(console.log("great"))
        .catch((err) => {
          console.log(err);
        });

      // this.editedStory.comments.push(this.newComment);

      this.typingMode = 0;
      this.newComment = "";
    },
    typing() {
      this.typingMode = 1;
    },
  },
  created() {
    this.newComment = storyService.getEmptyComment();
    this.newComment.by = this.story.by;
    this.editedStory = this.story;
  },
  computed: {
    imgSrc() {
      return this.story.imgUrl;
    },
    location() {
      return this.story.loc.name;
    },
    profileImgSrc() {
      return this.story.by.profileImgUrl;
    },
  },
};
</script>

<style>
</style>