<template>
  <section v-if="story" class="story-card">
    <div class="top-card">
      <div class="flex">
        <img :src="profileImgSrc" />
        <div class="username-bar">
          <div class="username-top-card">{{ story.by.username }}</div>
          <div class="loc-card">{{ story.loc.name }}</div>
        </div>
      </div>
      <div>...</div>
    </div>
    <div class="data-card">
      <img class="img-story" :src="imgSrc" />
    </div>
    <div class="action-card layout-card">
      <div class="flex like-comment">
        <img src="../icons/heart.png" alt="" />
        <img src="../icons/bubble-chat.png" alt="" />
        <img src="../icons/direct-instagram.png" alt="" />
      </div>
      <!-- <div>📖</div> -->
      <img class="save-btn-card" src="../icons/save-instagram.png" alt="" />
    </div>

    <!-- <div class="action-card layout-card">
      <div class="flex like-comment">
        <div>😳</div>
        <div>😳</div>
        <div>😳</div>
      </div>
      <div>📖</div> -->
    <!-- <img src="../icons/save-instagram.png" alt="" /> -->
    <!-- </div> -->

    <div class="liked-bar layout-card">140 likes</div>
    <div class="content layout-card">
      <div class="username-bottom-card">
        {{ story.by.username }}
      </div>
      <div>{{ story.txt }}</div>
    </div>
    <div class="comments layout-card">
      View all {{ story.comments.length }} comments
    </div>
    <div class="time-ago layout-card">5 hours ago</div>
    <div class="add-comment-bar layout-card">
      <div class="flex">
        <span>😎</span>
        <div class="add-comment">Add a comment</div>
      </div>
      <div class="post-btn-crd">Post</div>
    </div>
    <div></div>
  </section>
</template>

<script>
export default {
  props: {
    story: Object,
  },
  methods: {},
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