<template>
  <section v-if="story" class="comments-backround">
    <span class="btn">
      <svg
        aria-label="Close"
        class="fg7vo5n6 lrzqjn8y"
        color="#ffffff"
        fill="#ffffff"
        height="18"
        role="img"
        viewBox="0 0 48 48"
        width="18"
        @click="closeComments"
      >
        <!-- <title>Close</title> -->
        <path
          clip-rule="evenodd"
          d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
          fill-rule="evenodd"
        ></path>
      </svg>
      <!-- <img src="../icons/white x.png" alt="" @click="closeComments()" /> -->
    </span>
    <section class="comment-view-container-in-cmp">
      <div class="main-img-comment-container">
        <img class="img-comment-view" :src="story.imgUrl" alt="" />
      </div>

      <div class="comments-txt-box-right">
        <!-- TOP -->
        <div class="top-comment-bar2 flex">
          <router-link class="router-link" :to="'/user/' + story.by._id">
            <div class="profile-img-comments-border-cont">
              <img
                class="profile-img-comments-border"
                :src="story.by.profileImgUrl"
                alt=""
              />
            </div>
          </router-link>

          <div class="top-right-comment-view2">
            <div class="username-dot-following2 username-comment">
              <div>
                <router-link class="router-link" :to="'/user/' + story.by._id">
                  {{ story.by.username }}</router-link
                >
                <div class="loc-card">{{ story.loc.name }}</div>
              </div>
              <div>•</div>
              <div
                @click="followBtnClicked"
                class="btn"
                v-if="isUserFollowStoryBy"
              >
                Following
              </div>
              <div
                @click="followBtnClicked"
                class="comment-card-follow-btn btn"
                v-if="!isUserFollowStoryBy"
              >
                Follow
              </div>
            </div>
            <div class="three-dot2">•••</div>
          </div>
        </div>

        <!-- COMMENTS-BOX -->
        <div class="overflow-y">
          <div class="auther-comments-bar">
            <router-link class="router-link" :to="'/user/' + story.by._id">
              <div class="profile-img-comments-border-cont">
                <img
                  class="profile-img-comments-border"
                  :src="story.by.profileImgUrl"
                  alt=""
                />
              </div>
            </router-link>
            <div class="content-comments-bar">
              <p class="username-comment2">
                <router-link class="router-link" :to="'/user/' + story.by._id">
                  {{ story.by.username }}</router-link
                >
              </p>
              {{ story.txt }}
              <p v-for="tag in story.tags" :key="tag">#{{ tag }}</p>
            </div>
          </div>

          <div class="time-ago-comment">43m</div>
          <div
            class="comment-block"
            v-for="comment in story.comments"
            :key="comment.id"
          >
            <div class="comment-block-top">
              <div class="left-comment-container">
                <router-link
                  class="router-link"
                  :to="'/user/' + comment.by._id"
                >
                  <img
                    class="profile-img-comments"
                    :src="comment.by.profileImgUrl"
                    alt=""
                /></router-link>
                <div class="username-txt-comment">
                  <div class="username-comment">
                    <router-link
                      class="router-link"
                      :to="'/user/' + comment.by._id"
                    >
                      {{ comment.by.username }}</router-link
                    >
                  </div>
                  <span>{{ comment.txt }}</span>
                </div>
              </div>
              <div class="right-comment-container">
                <img class="icon-comments" src="../icons/heart.png" alt="" />
              </div>
            </div>
            <div class="comment-block-buttom">2h <span>Reply</span></div>
          </div>
        </div>

        <!-- FOOTER -->
        <section class="footer-comments">
          <!-- ACTION -->
          <div class="comment-footer-top-box">
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
                  v-else
                  @click="likedStory"
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
                v-if="!isStorySavedByUser"
                @click="savedClicked"
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
                @click="savedClicked"
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
            <div class="liked-bar layout-card">140 likes</div>
            <div class="time-ago layout-card">5 hours ago</div>
          </div>
          <!-- ADD - COMMENT - BAR-->
          <div class="add-comment-bar-comment-page layout-card">
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

            <!-- POST-BTN -->
            <div
              v-if="newComment.txt"
              @click="addCommentTxt"
              class="post-btn-crd2 btn"
            >
              Post
            </div>
            <div v-if="!newComment.txt" class="post-btn-crd">Post</div>
          </div>
        </section>
      </div>
    </section>
  </section>
</template>

<script>
import { storyService } from "../services/story.service";
export default {
  props: {},
  data() {
    return {
      typingMode: 0,
      newComment: null,
      isUserLikeStory: false,
      story: null,
      loggedInUser: null,
      isStorySavedByUser: false,
      isUserFollowStoryBy: false,
    };
  },
  async created() {
    this.loggedInUser = this.$store.getters.getUser;

    const { storyId } = this.$route.params;

    const story = await storyService.getStoryById(storyId);
    this.story = story;

    this.isUserLikeStory = this.story.likedBy.some(
      (e) => e._id === this.loggedInUser._id
    );

    this.newComment = storyService.getEmptyComment();

    this.isUserFollowStoryBy = this.loggedInUser.following.some(
      (by) => by._id === this.story.by._id
    );
  },
  methods: {
    closeComments() {
      this.$router.push(`/`);
    },
    typing() {
      this.typingMode = 1;
    },
    async addCommentTxt() {
      const storyCopy = JSON.parse(JSON.stringify(this.story));
      try {
        const returnedStory = await this.$store.dispatch("addComment", {
          editedStory: storyCopy,
          newComment: this.newComment,
        });
        const { storyId } = this.$route.params;
        this.story = returnedStory;
      } catch (err) {
        throw err;
      }
      this.typingMode = 0;
      this.newComment = storyService.getEmptyComment();
    },
    async likedStory() {
      const storyCopy = JSON.parse(JSON.stringify(this.story));
      this.isUserLikeStory = !this.isUserLikeStory;
      try {
        const savedStory = await this.$store.dispatch("addLike", {
          editedStory: storyCopy,
        });
        this.isUserLikeStory = savedStory.likedBy.some((e) => {
          return e._id === this.loggedInUser._id;
        });
        this.story = savedStory;
      } catch (err) {
        console.log("liked story catch");
        this.isUserLikeStory = !this.isUserLikeStory;
        throw err;
      }
    },
    async savedClicked() {
      const userCopy = JSON.parse(JSON.stringify(this.loggedInUser));
      this.isStorySavedByUser = !this.isStorySavedByUser;
      try {
        const savedUser = await this.$store.dispatch("addStoryToSavedUser", {
          storyId: this.story._id,
          editedUser: userCopy,
        });
        console.log("savedUser:", savedUser);
        this.loggedInUser = savedUser;
        this.isStorySavedByUser = this.loggedInUser.savedStoryIds.some((id) => {
          return id === this.story._id;
        });
      } catch (err) {
        this.isStorySavedByUser = !this.isStorySavedByUser;
        throw err;
      }
    },
    async followBtnClicked() {
      const loggedUserCopy = JSON.parse(JSON.stringify(this.loggedInUser));
      this.isUserFollowStoryBy = !this.isUserFollowStoryBy;
      try {
        const savedUser = await this.$store.dispatch("changeFollowStatus", {
          storyBy: this.story.by,
          editedUser: loggedUserCopy,
        });
        console.log("savedUser:", savedUser);
        this.loggedInUser = savedUser;
        this.isUserFollowStoryBy = this.loggedInUser.following.some((by) => {
          return by._id === this.story.by._id;
        });
      } catch (err) {
        this.isUserFollowStoryBy = !this.isUserFollowStoryBy;
        throw err;
      }
    },
  },
};
</script>

<style>
</style>