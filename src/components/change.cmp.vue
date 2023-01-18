<template>
  <section v-if="loggedInUser" class="change-user-bar">
    <!-- LEFT-SIDE -->
    <div class="flex">
      <router-link :to="'/user/' + loggedInUser._id">
        <div class="img-user-change-cont">
          <img
            class="img-user-change"
            :src="loggedInUser.profileImgUrl"
            alt=""
          />
        </div>
      </router-link>
      <div class="flex column align-self-center names-change-bar">
        <router-link class="router-link" :to="'/user/' + loggedInUser._id">
          {{ loggedInUser.username }}
        </router-link>
        <span>{{ loggedInUser.fullName }}</span>
      </div>
    </div>
    <!-- SWITCH-BTN -->
    <router-link class="router-link" to="/login">
      <div class="switch-btn">Switch</div>
    </router-link>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loggedInUser: null,
    };
  },
  created() {
    this.loggedInUser = this.$store.getters.getUser;
  },
};
</script>

<style>
</style>