<template>
  <section v-if="users">
    <div class="suggetion-header">
      <div>Suggestions For You</div>
      <span>See All</span>
    </div>
    <section class="suggestions-container">
      <div
        class="suggest-container"
        v-for="suggest in suggestUsers"
        :key="suggest._id"
      >
        <div class="flex">
          <img class="suggest-img" :src="suggest.profileImgUrl" alt="" />
          <div class="username-block-suggest">
            <div class="suggest-username">{{ suggest.username }}</div>
            <div class="suggest-for-you">Suggested for you</div>
          </div>
        </div>
        <div @click="followBtnClicked(suggest)" class="follow-suggest btn">
          Follow
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { storyService } from "../services/story.service";

export default {
  props: {
    users: Array,
  },
  data() {
    return {
      loggedInUser: null,
      suggestUsers: null,
    };
  },
  methods: {
    // isFollow(suggest) {
    //   const check = this.loggedInUser.following.find(
    //     (by) => by._id === suggest._id
    //   );
    //   // console.log("check", check);
    //   return check;
    // },
    followBtnClicked(suggest) {
      console.log("follow-suggest", suggest);

      const loggedUserCopy = JSON.parse(JSON.stringify(this.loggedInUser));
      const suggestBy = {};
      suggestBy._id = suggest._id;
      suggestBy.username = suggest.username;
      suggestBy.profileImgUrl = suggest.profileImgUrl;
      console.log("suggestBy", suggestBy);

      this.$store
        .dispatch("changeFollowStatus", {
          suggestBy: suggestBy,
          editedUser: loggedUserCopy,
        })
        .then((savedUser) => {
          console.log("savedUser:", savedUser);
          this.loggedInUser = savedUser;
          // this.isUserFollowStoryBy = this.loggedInUser.following.find((by) => {
          //   return by._id === this.story.by._id;
          // });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.loggedInUser = storyService.getUser();
    const render = [];

    this.users.map((user) => {
      if (this.loggedInUser.following.some((by) => by._id === user._id))
        console.log("ttttttttrrrrrruuuueee");
      else {
        console.log("elseeeeeeeee");
        render.push(user);
      }
    });
    this.suggestUsers = render;
  },
};
</script>

<style>
</style>