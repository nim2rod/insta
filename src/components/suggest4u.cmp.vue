<template>
  <section v-if="suggestions">
    <div class="suggetion-header">
      <div>Suggestions For You</div>
      <span>See All</span>
    </div>
    <section class="suggestions-container">
      <div
        class="suggest-container"
        v-for="suggest in suggestions"
        :key="suggest._id"
      >
        <div class="flex">
          <img class="suggest-img" :src="suggest.profileImgUrl" alt="" />
          <div class="username-block-suggest">
            <div class="suggest-username">{{ suggest.username }}</div>
            <div class="suggest-for-you">Suggested for you</div>
          </div>
        </div>
        <div class="follow-suggest">Follow</div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    suggestions: Array,
  },
};
</script>

<style>
</style>