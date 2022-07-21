<template>
  <section class="stories-bar-container">
    <div v-for="story in stories" :key="story._id">
      <img class="story" :src="story.by.profileImgUrl" alt="" />
    </div>
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