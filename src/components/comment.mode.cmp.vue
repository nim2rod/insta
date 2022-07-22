<template>
  <section class="comments-backround">
    <span class="btn">
      <img src="../icons/close.png" alt="" @click="closeComments()" />
    </span>
    <section class="comment-view-container">
      <img
        class="img-comment-view"
        src="../img/profile-pic/fibi-profile.jpeg"
        alt=""
      />
      <div class="comments-txt-box"></div>
    </section>
  </section>
</template>

<script>
export default {
  methods: {
    closeComments() {
      this.$emit("closeComments");
    },
  },
};
</script>

<style>
</style>