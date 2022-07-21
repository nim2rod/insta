<template>
  <section v-if="story" class="story-card">
    <!-- TOP -->
    <div class="top-card">
      <div class="flex">
        <img class="profile-pic-card" :src="profileImgSrc" />
        <!-- <img src="../img/profile-pic/chandler-profile.jpeg" alt="" /> -->
        <div class="username-bar">
          <div class="username-top-card">{{ story.by.username }}</div>
          <div class="loc-card">{{ location }}</div>
        </div>
      </div>
      <div>...</div>
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
    <!-- LIKE -->
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
      <div class="flex add-coment-smily">
        <img src="../icons/smile.png" alt="" />
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
  created() {
    console.log("this.story", this.story);
  },
  computed: {
    imgSrc() {
      return this.story.imgUrl;
    },
    location() {
      console.log("???", this.story);
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