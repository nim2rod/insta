<template>
  <section class="event-page">
    <div class="event-header">Upcoming Events In NYC</div>
    <list v-if="this.eventsArr" :eventsArr="this.eventsArr"></list>
  </section>
</template>

<script>
import list from "../components/events-page/list-events.vue";
export default {
  data() {
    return {
      eventsArr: null,
    };
  },
  created() {
    const apiKey = "MzMwMDA3NDB8MTY4MTIyMzcyMi42MDgxMzg";
    const baseUrl = "https://api.seatgeek.com/2/events";
    const city = "New York";
    const perPage = 10;

    const currentDate = new Date();
    const lastDayOfWeek = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 7
    );
    const startDateIsoString = currentDate.toISOString().split("T")[0];
    const endDateIsoString = lastDayOfWeek.toISOString().split("T")[0];

    const endpointUrl = `${baseUrl}?client_id=${apiKey}&venue.city=${city}&datetime_utc.gte=${startDateIsoString}&datetime_utc.lte=${endDateIsoString}&sort=datetime_utc.asc&per_page=${perPage}`;
    fetch(endpointUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.eventsArr = data.events;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  methods: {},
  computed: {},
  components: {
    list,
  },
};
</script>

<style>
</style>