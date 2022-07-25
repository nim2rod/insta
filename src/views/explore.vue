<template>
  <section class="grid-container">
    <div
      class="img-box-for"
      v-for="explore in explores"
      :key="explore.by.username"
    >
      <div class="img-container-explore">
        <img :src="explore.imgUrl" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
import { storyService } from "../services/story.service";
export default {
  data() {
    return {
      explores: null,
    };
  },
  created() {
    this.explores = storyService.createExploreStory();
    console.log("explore", this.explores);
  },
};
</script>

<style>
</style>