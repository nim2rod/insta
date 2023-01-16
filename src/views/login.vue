<template>
  <section class="login-container-backround">
    <section class="login-container">
      <div class="login-options">
        <span>Login with your fivorite character:</span>
        <div>ross_geller</div>
        <div>rachel_green</div>
        <div>joey_tribbiani</div>
      </div>
      <div class="input-box-login">
        <div>use the suggested password</div>
        <input v-model="cred.username" type="txt" placeholder="ross_geller" />
        <input v-model="cred.password" type="text" placeholder="1234" />
      </div>
      <div @click="login" class="btn login-btn">Sign in</div>
    </section>
  </section>
</template>

<script>
export default {
  name: "login-page",
  data() {
    return {
      cred: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      await this.$store.dispatch({ type: "login", cred: this.cred });
      // socketService.emit("set-user-socket", this.$store.getters.getUser._id)
      this.$emit("change-user", true);
      this.$router.push("/");
    },
  },
  // mounted() {
  //   this.$refs.username.focus();
  // },
};
</script>

<style>
</style>