<template v-if="stories">
  <section class="stories-bar-container">
    <section class="stories-bar-box">
      <div v-for="user in followingUsers" :key="user._id">
        <div v-if="user">
          <div class="story-img-container">
            <img class="story-img" :src="user.profileImgUrl" alt="" />
          </div>
          <div class="username-stories-bar">{{ user.username }}</div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    users: Array,
  },
  data() {
    return {
      followingUsers: null,
      loggedInUser: null,
    };
  },
  computed: {},
  methods: {},
  created() {
    const user = this.$store.getters.getUser;
    this.loggedInUser = user;
    const following = [];

    this.users.forEach((user) => {
      if (this.loggedInUser.following.some((f) => f._id === user._id))
        following.push(user);
    });
    this.followingUsers = following;
  },
};
</script>

<style>
</style>