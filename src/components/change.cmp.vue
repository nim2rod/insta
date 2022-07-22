<template>
  <section class="change-user-bar">
    <div class="flex">
      <router-link to="/user/:userId">
        <img
          class="img-user-change"
          src="../img/profile-pic/ross-profile.jpeg"
          alt=""
        />
      </router-link>
      <div class="flex column align-self-center names-change-bar">
        <router-link class="router-link" to="/user/:userId">
          ross_geller
        </router-link>
        <span>Ross Geller</span>
      </div>
    </div>
    <router-link class="router-link" to="/login">
      <div class="switch-btn">Switch</div>
    </router-link>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>