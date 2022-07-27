<template>
  <section class="create-new-backround">
    <div @click="closeModal" class="btn">
      <svg
        aria-label="Close"
        class="x-create"
        color="#ffffff"
        fill="#ffffff"
        role="img"
        viewBox="0 0 48 48"
      >
        <title>Close</title>
        <path
          clip-rule="evenodd"
          d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
          fill-rule="evenodd"
        ></path>
      </svg>
    </div>

    <!-- CHOOSE PIC VIEW -->
    <div v-if="!afterChoosePic" class="create-new-container">
      <div class="create-new-top">
        <p>Create new post</p>
      </div>
      <div v-if="!afterChoosePic" class="create-new-body">
        <div>
          <svg
            class="icon-create"
            aria-label="Icon to represent media such as images or videos"
            color="#262626"
            fill="#262626"
            role="img"
            viewBox="0 0 97.6 77.3"
          >
            <path
              d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
              fill="currentColor"
            ></path>
            <path
              d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
              fill="currentColor"
            ></path>
            <path
              d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div class="create-drag">Select photos from device</div>
        <div class="create-select btn">
          <input
            type="file"
            @change="onImgSelected"
            class="input-file-btn btn"
          />
          <p class="btn">Select from computer</p>
        </div>
      </div>
      <!-- ///// -->
      <!-- <div v-if="afterChoosePic" class="choose-pic-container">
        <img :src="newStory.imgUrl" alt="" />
      </div> -->
      <!-- ///////// -->
      <!-- <div v-if="afterChoosePic" class="svg-box-create">
        <svg class="choose-pic-container-svg">
          <path
            d="M10 20H4v-6a1 1 0 00-2 0v7a1 1 0 001 1h7a1 1 0 000-2zM20.999 2H14a1 1 0 000 2h5.999v6a1 1 0 002 0V3a1 1 0 00-1-1z"
          ></path>
        </svg>
      </div> -->
    </div>

    <!-- //ADD TXT VIEW// -->

    <div v-if="afterChoosePic" class="create-new-container-2">
      <!-- TOP -->
      <div class="create-new-top-2">
        <svg
          class="btn"
          @click="closeModal"
          aria-label="Back"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="2.909"
            x2="22.001"
            y1="12.004"
            y2="12.004"
          ></line>
          <polyline
            fill="none"
            points="9.276 4.726 2.001 12.004 9.276 19.274"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></polyline>
        </svg>
        <p>Create new post</p>
        <div class="btn" @click="addNewStory">Share</div>
      </div>

      <!-- MAIN-PIC-TXT -->
      <div class="img-insert-txt-container">
        <!-- PIC-BOX -->
        <div v-if="afterChoosePic" class="choose-pic-container-2">
          <img :src="newStory.imgUrl" alt="" />
        </div>

        <!-- RIHGT-SIDE-BOX -->

        <div class="insert-txt-box">
          <div class="username-bar-create">
            <img :src="newStory.by.profileImgUrl" alt="" />
            <div>{{ newStory.by.username }}</div>
          </div>

          <div class="input-txt-box-create">
            <!-- /// -->
            <textarea
              v-model="newStory.txt"
              placeholder="Write a caption..."
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <!-- /// -->
            <!-- <input
              v-model="newStory.txt"
              type="text"
              placeholder="Write a caption..."
            /> -->
          </div>
          <div class="location-input-create-box">
            <input
              class="loc-input-create"
              v-model="newStory.loc.name"
              type="text"
              placeholder="Add location"
            />
          </div>
        </div>
      </div>
      <!-- /// -->
    </div>
  </section>
</template>

<script>
import { storyService } from "../services/story.service";
export default {
  data() {
    return {
      createMode: 1,
      newStory: null,
      afterChoosePic: 0,
    };
  },
  methods: {
    closeModal() {
      this.createMode = 0;
      this.$emit("closeModal", this.createMode);
    },
    onImgSelected(event) {
      storyService.loadImageFromInput(event, this.addPicToStory);
      this.afterChoosePic = 1;
    },
    addPicToStory({ src }) {
      this.newStory.imgUrl = src;
    },
    addNewStory() {
      console.log("newStory-create", this.newStory);
      this.$store
        .dispatch("addNewStory", {
          newStory: this.newStory,
        })
        .then(console.log("great"))
        .catch((err) => {
          console.log(err, "we have problemmm");
        });
      this.createMode = 0;
      this.newStory = null;
      this.afterChoosePic = 0;
      this.$emit("closeModal", this.createMode);
    },
  },
  created() {
    this.newStory = storyService.getEmptyStory();
    this.newStory.by = storyService.getUser();
    console.log("this.newStory", this.newStory);
  },
};
</script>

<style>
</style>