<template>
  <section class="change-user-bar">
    <div class="flex">
      <div class="img-user-change-cont">
        <router-link :to="'/user/' + loggedInUser._id">
          <img
            class="img-user-change"
            :src="loggedInUser.profileImgUrl"
            alt=""
          />
        </router-link>
      </div>
      <div class="flex column align-self-center names-change-bar">
        <router-link class="router-link" :to="'/user/' + loggedInUser._id">
          {{ loggedInUser.username }}
        </router-link>
        <span>{{ loggedInUser.fullName }}</span>
      </div>
    </div>
    <router-link class="router-link" to="/login">
      <div class="switch-btn">Switch</div>
    </router-link>
  </section>
</template>

<script>
import { storyService } from "../services/story.service";
export default {
  data() {
    return {
      loggedInUser: null,
    };
  },
  created() {
    this.loggedInUser = storyService.getUser();
  },
};
</script>

<style>
</style>