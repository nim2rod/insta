<template>
  <section class="event-list-cont" v-if="eventsArr">
    <div v-for="event in eventsArr" :key="event.id">
      <event-card :event="event"></event-card>
    </div>
  </section>
</template>
  
  <script>
import eventCard from "../events-page/card-event.vue";
export default {
  props: {
    eventsArr: Array,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
  components: {
    eventCard,
  },
};
</script>
  
  <style>
</style>