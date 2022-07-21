<template>
  <section v-if="story" class="story-card">
    <div class="top-card">
      <div class="flex">
        <img :src="profileImgSrc" />
        <div class="username-bar">
          <div>{{ story.by.username }}</div>
          <div>{{ story.loc.name }}</div>
        </div>
      </div>
      <div>...</div>
    </div>
    <div class="data-card">
      <img class="img-story" :src="imgSrc" />
    </div>
    <div class="action-card">
      <div>🧡 🗯 🔗</div>
      <div>📖</div>
    </div>
    <div class="liked-bar">15 liked</div>
    <div class="content">
      <div>{{ story.by.username }}</div>
      <div>{{ story.txt }}</div>
    </div>
    <div class="comments">view all {{ story.comments.length }} comments</div>
    <div class="time-ago">5 hours ago</div>
    <div class="add-comment">
      <div>😎 add a comment</div>
      <div>Post</div>
    </div>
    <div></div>
  </section>
</template>

<script>
export default {
  props: {
    story: Object,
  },
  computed: {
    imgSrc() {
      return this.story.imgUrl;
    },
    profileImgSrc() {
      return this.story.by.profileImgUrl;
    },
  },
};
</script>

<style>
</style>