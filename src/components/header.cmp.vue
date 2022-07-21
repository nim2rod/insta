<template>
  <header class="header">
    <div class="main-logo">Instagram</div>
    <input type="text" placeholder="search" />

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
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>