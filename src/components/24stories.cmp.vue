<template>
  <section class="stories-bar-container">
    <section class="stories-bar-box">
      <div v-for="story in stories" :key="story._id">
        <div class="story-img-container">
          <img class="story-img" :src="story.by.profileImgUrl" alt="" />
        </div>
        <div class="username-stories-bar">{{ story.by.username }}</div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    stories: Array,
  },
  computed: {
    getProfilePic() {
      return this.story.by.profileImgUrl;
    },
  },
};
</script>

<style>
</style>