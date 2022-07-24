<template>
  <section class="comments-backround">
    <span class="btn">
      <img src="../icons/close.png" alt="" @click="closeComments()" />
    </span>
    <section class="comment-view-container-in-cmp">
      <div class="main-img-comment-container">
        <img class="img-comment-view" :src="story.imgUrl" alt="" />
      </div>

      <!-- <img
        class="img-comment-view"
        src="../img/profile-pic/fibi-profile.jpeg"
        alt=""
      /> -->
      <div class="comments-txt-box-right">
        <div class="top-comments-bar">
          <div class="left-top-comments-bar">
            <img
              class="profile-img-comments-border"
              :src="story.by.profileImgUrl"
              alt=""
            />
            <p class="username-comment">{{ story.by.username }}</p>
            <p class="username-comment"><span>•</span> Following</p>
          </div>
          <span
            >...
            <!-- <img class="icon-comments" src="../icons/more.png" alt="" /> -->
          </span>
        </div>
        <div class="auther-comments-bar">
          <img
            class="profile-img-comments-border"
            :src="story.by.profileImgUrl"
            alt=""
          />
          <div class="content-comments-bar">
            <span class="username-comment">{{ story.by.username }}</span>
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
              <img
                class="profile-img-comments"
                :src="comment.by.profileImgUrl"
                alt=""
              />
              <div class="username-txt-comment">
                <div class="username-comment">{{ comment.by.username }}</div>
                <span>{{ comment.txt }}</span>
              </div>
            </div>
            <div class="right-comment-container">
              <img class="icon-comments" src="../icons/heart.png" alt="" />
            </div>
          </div>
          <div class="comment-block-buttom">2h <span>Reply</span></div>
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