<template>
  <section class="comments-backround">
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
        <!-- /////////////////////////////////////// -->

        <!-- <div class="top-comments-bar">
          <div class="left-top-comments-bar">
            <router-link class="router-link" :to="'/user/' + story.by._id">
              <img
                class="profile-img-comments-border"
                :src="story.by.profileImgUrl"
                alt=""
            /></router-link>
            <div></div>
            <p class="username-comment">
              <router-link class="router-link" :to="'/user/' + story.by._id">
                {{ story.by.username }}</router-link
              >
            </p>
            <p class="username-comment"><span>•</span> Following</p>
          </div>
          <span>... </span>
        </div> -->

        <!-- ////// -->
        <!-- /////////////////////////////////////////////// -->

        <div class="top-comment-bar2 flex">
          <div>
            <router-link class="router-link" :to="'/user/' + story.by._id">
              <img
                class="profile-img-comments-border"
                :src="story.by.profileImgUrl"
                alt=""
            /></router-link>
          </div>

          <div class="top-right-comment-view2">
            <div class="username-dot-following2 username-comment">
              <div>
                <router-link class="router-link" :to="'/user/' + story.by._id">
                  {{ story.by.username }}</router-link
                >
              </div>
              <div>•</div>
              <div>Following</div>
            </div>
            <div class="three-dot2">•••</div>
          </div>
        </div>

        <!-- //////////////////////////////////// -->

        <!-- COMMENTS-BOX -->
        <div class="overflow-y">
          <div class="auther-comments-bar">
            <router-link class="router-link" :to="'/user/' + story.by._id">
              <img
                class="profile-img-comments-border"
                :src="story.by.profileImgUrl"
                alt=""
            /></router-link>
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
        <section class="fake-footer"></section>
        <section class="footer-comments">
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
          <div class="liked-bar layout-card">140 likes</div>
          <div class="time-ago layout-card">5 hours ago</div>

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
                v-model="newCommentTxt"
                type="text"
                placeholder="Add a comment.."
              />

              <div v-if="!typingMode" @click="typing" class="add-comment">
                Add a comment
              </div>
            </div>

            <!-- POST-BTN -->
            <div
              v-if="newCommentTxt"
              @click="addCommentTxt"
              class="post-btn-crd2"
            >
              Post
            </div>
            <div v-if="!newCommentTxt" class="post-btn-crd">Post</div>
          </div>
        </section>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    story: Object,
  },
  data() {
    return {
      typingMode: 0,
      newCommentTxt: null,
    };
  },
  created() {},
  methods: {
    closeComments() {
      this.$emit("closeComments");
    },
    typing() {
      this.typingMode = 1;
    },
    addCommentTxt() {
      this.$emit("addCommentTxt", this.newCommentTxt);
      this.typingMode = 0;
      this.newCommentTxt = null;
    },
  },
};
</script>

<style>
</style>