<template>
  <section v-if="story" class="story-card">
    <!-- TOP -->
    <div class="top-card">
      <div class="flex left-top-card">
        <img class="profile-pic-card" :src="profileImgSrc" />
        <div class="username-bar">
          <div class="username-top-card font1">{{ story.by.username }}</div>
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
      <div class="flex like-comment">
        <img src="../icons/heart.png" alt="" />
        <img src="../icons/bubble-chat.png" alt="" />
        <img src="../icons/direct-instagram.png" alt="" />
      </div>
      <img class="save-btn-card" src="../icons/save-instagram.png" alt="" />
    </div>

    <!-- LIKE TXT -->
    <div class="liked-bar layout-card font1">140 likes</div>
    <div class="content layout-card">
      <div class="username-bottom-card font1">
        {{ story.by.username }}
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
        <img src="../icons/smile.png" alt="" />
        <div class="add-comment">Add a comment</div>
      </div>
      <div class="post-btn-crd">Post</div>
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
  },
  created() {},
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