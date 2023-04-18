<template v-if="stories">
  <section class="stories-bar-container">
    <section class="stories-bar-box">
      <!-- <div v-for="story in followingStories" :key="story._id">
        <div v-if="story">
          <div class="story-img-container">
            <img class="story-img" :src="story.by.profileImgUrl" alt="" />
          </div>
          <div class="username-stories-bar">{{ story.by.username }}</div>
        </div>
      </div> -->
      <!-- /// USERS-->
      <div v-for="story in followingStories" :key="story._id">
        <div v-if="story">
          <div class="story-img-container">
            <img class="story-img" :src="story.profileImgUrl" alt="" />
          </div>
          <div class="username-stories-bar">{{ story.username }}</div>
        </div>
      </div>
      <!-- /// -->
    </section>
  </section>
</template>

<script>
export default {
  props: {
    // stories: Array,
    users: Array,
  },
  data() {
    return {
      followingStories: null,
      loggedInUser: null,
    };
  },
  computed: {
    getProfilePic() {
      return this.story.by.profileImgUrl;
    },
    user() {
      return this.$store.getters.getUser;
    },
  },
  created() {
    const user = this.$store.getters.getUser;
    this.loggedInUser = user;
    const following = [];

    // this.stories.forEach((story) => {
    //   if (
    //     this.loggedInUser.following.some(
    //       (f) => f.username === story.by.username
    //     )
    //   )
    //     following.push(story);
    // });
    ///// USERS:
    this.users.forEach((story) => {
      if (this.loggedInUser.following.some((f) => f._id === story._id))
        following.push(story);
    });
    /////
    this.followingStories = following;
  },
};
</script>

<style>
</style>