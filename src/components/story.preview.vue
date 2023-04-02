<template>
  <section v-if="isFollow" class="story-card">
    <!-- TOP -->
    <div class="top-card">
      <div class="flex left-top-card">
        <router-link class="router-link" :to="'/user/' + story.by._id">
          <div class="profile-pic-card-cont">
            <img class="profile-pic-card" :src="profileImgSrc" />
          </div>
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
          v-if="!isUserLikeStory"
          @click="likedStory"
          aria-label="Like"
          class="btn"
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
          @click="likedStory"
          v-else
          aria-label="Unlike"
          class="btn"
          color="#ed4956"
          fill="#ed4956"
          height="24"
          role="img"
          viewBox="0 0 48 48"
          width="24"
        >
          <path
            d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
          ></path>
        </svg>
        <svg
          @click="viewComments(story)"
          aria-label="Comment"
          class="btn"
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
        v-if="!isStorySavedByUser"
        @click="addStoryToSavedUser"
        class="save-post-icon btn"
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
      <svg
        v-else
        @click="addStoryToSavedUser"
        aria-label="Remove"
        class="save-post-icon btn"
        color="#262626"
        fill="#262626"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <path
          d="M20 22a.999.999 0 01-.687-.273L12 14.815l-7.313 6.912A1 1 0 013 21V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1z"
        ></path>
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

    <!-- COMMENTS -Time ago -->
    <div class="comments layout-card btn font1" @click="viewComments(story)">
      View all {{ this.currStory.comments.length }} comments
    </div>
    <!-- <div class="time-ago layout-card font1">5 hours ago</div> -->
    <div class="time-ago layout-card font1">{{ timeAgo() }}</div>

    <!-- ADD - COMMENTS - BAR -->
    <div class="add-comment-bar layout-card font1">
      <div class="flex add-comment-smily">
        <!-- SMILY -->
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
        <!-- INPUT / addComment -->
        <input
          v-if="typingMode"
          v-model="newComment.txt"
          type="text"
          placeholder="Add a comment.."
        />
        <div v-if="!typingMode" @click="typing" class="add-comment">
          Add a comment
        </div>
      </div>

      <!-- 2-POST-BTN -->
      <div v-if="newComment.txt" @click="addComment" class="post-btn-crd2 btn">
        Post
      </div>
      <div v-if="!newComment.txt" @click="addComment" class="post-btn-crd">
        Post
      </div>
    </div>
  </section>
</template>

<script>
import { storyService } from "../services/story.service";

export default {
  props: {
    story: Object,
  },
  components: {},

  data() {
    return {
      typingMode: 0,
      newComment: null,
      loggedInUser: null,
      isUserLikeStory: false,
      isFollow: false,
      isStorySavedByUser: false,
      currStory: null,
    };
  },
  methods: {
    viewComments(story) {
      this.$router.push(`/story/${story._id}`);
    },
    addCommentTxt(commentTxt, story) {
      this.newComment.txt = commentTxt;
      this.addComment();
    },
    async addComment() {
      const storyCopy = JSON.parse(JSON.stringify(this.story));
      try {
        await this.$store.dispatch("addComment", {
          editedStory: storyCopy,
          newComment: this.newComment,
        });
      } catch (err) {
        throw err;
      }
      this.typingMode = 0;
      this.newComment = storyService.getEmptyComment();
    },
    typing() {
      this.typingMode = 1;
    },
    async likedStory() {
      const storyCopy = JSON.parse(JSON.stringify(this.story));
      this.isUserLikeStory = !this.isUserLikeStory;
      try {
        await this.$store.dispatch("addLike", { editedStory: storyCopy });
        this.isUserLikeStory = this.story.likedBy.some((u) => {
          return u._id === this.loggedInUser._id;
        });
      } catch (err) {
        console.log("liked story catch");
        this.isUserLikeStory = !this.isUserLikeStory;
        throw err;
      }
    },
    async addStoryToSavedUser() {
      const userCopy = JSON.parse(JSON.stringify(this.loggedInUser));
      this.isStorySavedByUser = !this.isStorySavedByUser;
      try {
        const savedUser = await this.$store.dispatch("addStoryToSavedUser", {
          storyId: this.story._id,
          editedUser: userCopy,
        });
        this.loggedInUser = savedUser;
        this.isStorySavedByUser = this.loggedInUser.savedStoryIds.some((id) => {
          return id === this.story._id;
        });
      } catch (err) {
        this.isStorySavedByUser = !this.isStorySavedByUser;
        throw err;
      }
    },
    timeAgo() {
      let timeAgo;
      if (this.story.timeAgoMiliSec < 1000 * 60 * 60)
        timeAgo = `${
          (this.story.timeAgoMiliSec / (1000 * 60)).Math.floor
        } minuts ago`;
      else if (this.story.timeAgoMiliSec < 1000 * 60 * 60 * 24)
        timeAgo = `${
          (this.story.timeAgoMiliSec / (1000 * 60 * 60)).Math.floor
        } hours ago`;
      else
        timeAgo = this.story.createdAt.slice(
          0,
          this.story.createdAt.indexOf(" ")
        );
      return timeAgo;
    },
  },
  created() {
    this.newComment = storyService.getEmptyComment();

    this.loggedInUser = this.$store.getters.getUser;

    this.isUserLikeStory = this.story.likedBy.some(
      (u) => u._id === this.loggedInUser._id
    );

    this.isFollow = this.loggedInUser.following.some(
      (u) => u._id === this.story.by._id
    );

    this.isStorySavedByUser = this.loggedInUser.savedStoryIds.some(
      (id) => id === this.story._id
    );

    this.currStory = this.story;
    socketService.on("other-user-add-comment", (story) => {
      this.$store.commit({ type: "updateStory", editedStory: story });
      this.currStory = story;
    });
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