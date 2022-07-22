<template>
  <header class="header-container">
    <section class="header">
      <div class="main-logo">Instagram</div>

      <input class="search-header" type="text" placeholder="  🔍   Search" />

      <nav class="nav-bar-header">
        <router-link to="/">
          <img class="nav-header-icon" src="../icons/home.png" alt="" />
        </router-link>

        <router-link to="/dm">
          <img
            class="nav-header-icon"
            src="../icons/direct-instagram.png"
            alt=""
          />
        </router-link>

        <img class="nav-header-icon" src="../icons/add.png" alt="" />

        <router-link to="/explore">
          <img class="nav-header-icon" src="../icons/direction.png" alt="" />
        </router-link>

        <img class="nav-header-icon" src="../icons/heart.png" alt="" />

        <router-link to="/user/:userId">
          <img
            class="nav-header-icon profile-pic-header"
            src="../img/profile-pic/ross-profile.jpeg"
            alt=""
          />
        </router-link>
      </nav>
    </section>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>