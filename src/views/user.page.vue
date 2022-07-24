<template>
  <section class="user-page-layout">
    <section class="user-page-top flex">
      <img class="user-img" :src="user.profileImgUrl" alt="" />
      <div class="top-right-userpage-box">
        <div class="top-name-bar-user">
          <div>{{ user.username }}</div>
          <div class="icon-user-page-box">
            <img class="icon-user-page" src="../icons/explore1.png" alt="" />
            <img class="icon-user-page" src="../icons/explore1.png" alt="" />
            <img class="icon-user-page" src="../icons/explore1.png" alt="" />
            <span>...</span>
          </div>
        </div>
        <div class="posts-follow-user">
          <span>91 Posts</span>
          <span>595 followers</span>
          <span>345 Following</span>
        </div>
        <div class="more-details-user">
          <span>{{ user.username }}</span>
          <span>{{ user.about }}</span>
          <p>Followed by {{ user.followers[0].username }} and more</p>
        </div>
      </div>
    </section>

    <section class="user-page-story">
      <section v-for="short in user.shorts" :key="short.headline">
        <img :src="short.url" alt="" />
        <div>{{ short.headline }}</div>
      </section>
    </section>

    <section class="user-page-data"></section>
  </section>
</template>

<script>
import { storyService } from "../services/story.service";

export default {
  data() {
    return {
      user: null,
      stories: null,
      //   user:this.$store.getters.getUser
    };
  },
  created() {
    const { userId } = this.$route.params;
    storyService.getById(userId, "user_db").then((currUser) => {
      console.log("currUser", currUser);
      this.user = currUser;
    });
  },
};
</script>

<style>
</style>