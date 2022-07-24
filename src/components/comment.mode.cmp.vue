<template>
  <section class="comments-backround">
    <span class="btn">
      <img src="../icons/close.png" alt="" @click="closeComments()" />
    </span>
    <section class="comment-view-container-in-cmp">
      <div class="main-img-comment-container">
        <img class="img-comment-view" :src="story.imgUrl" alt="" />
      </div>

      <div class="comments-txt-box-right">
        <div class="top-comments-bar">
          <div class="left-top-comments-bar">
            <router-link class="router-link" :to="'/user/' + story.by._id">
              <img
                class="profile-img-comments-border"
                :src="story.by.profileImgUrl"
                alt=""
            /></router-link>
            <p class="username-comment">
              <router-link class="router-link" :to="'/user/' + story.by._id">
                {{ story.by.username }}</router-link
              >
            </p>
            <p class="username-comment"><span>•</span> Following</p>
          </div>
          <span
            >...
            <!-- <img class="icon-comments" src="../icons/more.png" alt="" /> -->
          </span>
        </div>
        <!-- COMMENTS-BOX -->
        <div class="scroll-y">
          <div class="auther-comments-bar">
            <router-link class="router-link" :to="'/user/' + story.by._id">
              <img
                class="profile-img-comments-border"
                :src="story.by.profileImgUrl"
                alt=""
            /></router-link>
            <div class="content-comments-bar">
              <span class="username-comment"
                ><router-link class="router-link" :to="'/user/' + story.by._id">
                  {{ story.by.username }}</router-link
                ></span
              >
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
          <div class="action-card layout-card">
            <div class="flex like-comment">
              <img src="../icons/heart.png" alt="" />
              <img src="../icons/bubble-chat.png" alt="" />
              <img src="../icons/direct-instagram.png" alt="" />
            </div>
            <img
              class="save-btn-card"
              src="../icons/save-instagram.png"
              alt=""
            />
          </div>
          <div class="liked-bar layout-card">140 likes</div>
          <div class="time-ago layout-card">5 hours ago</div>
          <!-- ADD COMMENT -->
          <div class="add-comment-bar layout-card">
            <div class="flex add-coment-smily">
              <img src="../icons/smile.png" alt="" />
              <div class="add-comment">Add a comment</div>
            </div>
            <div class="post-btn-crd">Post</div>
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
  methods: {
    closeComments() {
      this.$emit("closeComments");
    },
  },
};
</script>

<style>
</style>