<template>
  <section v-if="user" class="user-page-layout">
    <!-- TOP-SECTION -->
    <section class="user-page-top flex">
      <img class="user-img" :src="user.profileImgUrl" alt="" />
      <div class="top-right-userpage-box">
        <div class="top-name-bar-user">
          <div class="username-big-user-page">{{ user.username }}</div>
          <div class="icon-user-page-box">
            <div class="message-btn">Message</div>
            <div class="follow-btn-box-user">
              <img class="icon-user-page" src="../icons/follow.png" alt="" />
            </div>
            <div class="arrow-down-icon-box-user">
              <img
                class="arrow-down-icon-user"
                src="../icons/arrow-down.png"
                alt=""
              />
            </div>
            <span class="three-dots-user">...</span>
          </div>
        </div>
        <div class="posts-follow-user">
          <div><span>91</span> posts</div>
          <div><span>595</span> followers</div>
          <div><span>345</span> following</div>
        </div>
        <div class="more-details-user">
          <span>{{ user.fullname }}</span>
          {{ user.about }}
          <p>
            Followed by <span>{{ user.followers[0].username }}</span> and more
          </p>
        </div>
      </div>
    </section>
    <!-- MIDDLE SECTION - SHORTS -->
    <section class="user-page-story">
      <section
        class="story-headline"
        v-for="short in user.shorts"
        :key="short.headline"
      >
        <img :src="short.url" alt="" />
        <div>{{ short.headline }}</div>
      </section>
    </section>
    <!-- BOTTOM DATA -->
    <section class="user-page-data">
      <div class="filter-posts-bar-box-user">
        <div class="filter-posts-bar-user">
          <span>
            <img src="../icons/grid.png" alt="" />
            POSTS</span
          >
          <span> <img src="../icons/reels.png" alt="" /> REELS</span>
          <span> <img src="../icons/play.png" alt="" /> VIDEOS</span>
          <span> <img src="../icons/tagged.png" alt="" /> TAGGED</span>
        </div>
      </div>
      <section class="all-data-container">
        <div
          class="data-container-user"
          v-for="story in stories"
          :key="story._id"
        >
          <div class="data-container-crop">
            <!-- V-IF STORY-BY-_ID EQUEL USER-_ID -->
            <img class="data-story-user" :src="story.imgUrl" alt="" />
          </div>
        </div>
      </section>
    </section>
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
  computed: {
    stories() {
      return this.$store.getters.storiesToDisplay;
    },
  },
};
</script>

<style>
</style>