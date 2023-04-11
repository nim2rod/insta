<template>
  <section class="event-card" v-if="event"></section>
  <h3>{{ event.id }}</h3>
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
  methods: {},
  computed: {},
  components: {},
};
</script>
      
      <style>
</style>