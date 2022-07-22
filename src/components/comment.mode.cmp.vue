<template>
  <section class="comments-backround">
    <span class="btn">
      <img src="../icons/close.png" alt="" @click="closeComments()" />
    </span>
    <section class="comment-view-container">
      <!-- <img class="img-comment-view" :src="story.imgUrl" alt="" /> -->
      <img
        class="img-comment-view"
        src="../img/profile-pic/fibi-profile.jpeg"
        alt=""
      />

      <div class="comments-txt-box-right">
        <div class="top-comments-bar">
          <div class="left-top-comments-bar">
            <img :src="story.by.profileImgUrl" alt="" />
            {{ story.by.username }}
          </div>
          <div>...</div>
        </div>
        <div class="auther-comments-bar">
          <img src="" alt="" />
          <div class="content-comments-bar">
            <span>{{ story.by.username }}</span>
            {{ story.txt }}
            <p>{{ story.tags[0] }}</p>
          </div>
        </div>
        <div class="all-comments-container"></div>
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