<template>
  <section v-if="user" class="user-page-layout">
    <!-- TOP-SECTION -->
    <section class="user-page-top flex">
      <div class="user-img-cont">
        <img class="user-img" :src="user.profileImgUrl" alt="" />
      </div>
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
    <!-- FILTER -->
    <section class="user-page-data">
      <div class="filter-posts-bar-box-user">
        <div class="filter-posts-bar-user">
          <span>
            <!-- icon-filter-story-reel -->
            <svg
              aria-label=""
              class="icon-filter-story-reel"
              color="#8e8e8e"
              fill="#8e8e8e"
              height="12"
              role="img"
              viewBox="0 0 24 24"
              width="12"
            >
              <rect
                fill="none"
                height="18"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                width="18"
                x="3"
                y="3"
              ></rect>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="9.015"
                x2="9.015"
                y1="3"
                y2="21"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="14.985"
                x2="14.985"
                y1="3"
                y2="21"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="21"
                x2="3"
                y1="9.015"
                y2="9.015"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="21"
                x2="3"
                y1="14.985"
                y2="14.985"
              ></line>
            </svg>
            POSTS</span
          >
          <span>
            <svg
              aria-label=""
              class="icon-filter-story-reel"
              color="#8e8e8e"
              fill="#8e8e8e"
              height="12"
              role="img"
              viewBox="0 0 24 24"
              width="12"
            >
              <line
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                x1="2.049"
                x2="21.95"
                y1="7.002"
                y2="7.002"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="13.504"
                x2="16.362"
                y1="2.001"
                y2="7.002"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="7.207"
                x2="10.002"
                y1="2.11"
                y2="7.002"
              ></line>
              <path
                d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <path
                d="M9.763 17.664a.908.908 0 01-.454-.787V11.63a.909.909 0 011.364-.788l4.545 2.624a.909.909 0 010 1.575l-4.545 2.624a.91.91 0 01-.91 0z"
                fill-rule="evenodd"
              ></path>
            </svg>
            REELS</span
          >
          <span>
            <svg
              aria-label=""
              class="icon-filter-story-reel"
              color="#8e8e8e"
              fill="#8e8e8e"
              height="12"
              role="img"
              viewBox="0 0 24 24"
              width="12"
            >
              <path
                d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5zm5-11.8l-6.8-3.9c-.5-.3-1-.3-1.5 0-.4.3-.7.7-.7 1.3v7.8c0 .5.3 1 .8 1.3.2.1.5.2.8.2s.5-.1.8-.2l6.8-3.9c.5-.3.8-.8.8-1.3s-.5-1-1-1.3zm-7.5 5.2V8.1l6.8 3.9-6.8 3.9z"
              ></path>
            </svg>
            VIDEOS</span
          >
          <span>
            <svg
              aria-label=""
              class="icon-filter-story-reel"
              color="#8e8e8e"
              fill="#8e8e8e"
              height="12"
              role="img"
              viewBox="0 0 24 24"
              width="12"
            >
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
            TAGGED</span
          >
          <span
            ><svg
              aria-label=""
              class="icon-filter-story-reel"
              color="#8e8e8e"
              fill="#8e8e8e"
              height="12"
              role="img"
              viewBox="0 0 24 24"
              width="12"
            >
              <path
                d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <path
                d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <circle
                cx="12.072"
                cy="11.075"
                fill="none"
                r="3.556"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></circle>
            </svg>
            TAGGED</span
          >
        </div>
      </div>
      <!-- BOTTOM-DATA -->
      <section class="all-data-container">
        <div
          class="data-container-user"
          v-for="story in stories"
          :key="story._id"
        >
          <div v-if="story.by._id === user._id" class="data-container-crop">
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