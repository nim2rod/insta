<template>
  <section class="event-card" v-if="event">
    <h3>{{ event.title }}</h3>
    <span>{{ toUpper(event.type) }}</span>
    <div>{{ timeFixed() }}</div>
    <img :src="event.performers[0].image" alt="" />
    <div>{{ event.venue.name }}</div>
    <span>{{ event.venue.address }}</span>
    <a class="router-link" :href="event.performers[0].url">Order tickets</a>
  </section>
</template>
      
      <script>
export default {
  props: {
    event: Object,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    timeFixed() {
      let time = this.event.datetime_local;
      return time.replaceAll("-", " ").replaceAll("T", " At ").slice(0, 19);
    },
    toUpper(str) {
      return str[0].toUpperCase() + str.slice(1, 20);
    },
  },
  computed: {},
  components: {},
};
</script>
      
      <style>
</style>