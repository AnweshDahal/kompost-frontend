<template>
  <v-app>
    <v-main>
      <app-header />
      <div class="contents"><router-view /></div>
      <app-footer></app-footer>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-footer": Footer,
    //s"app-footer": Footer,
  },

  data: () => ({}),
};
</script>
<style>
.v-main__wrap {
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between;
}
footer {
  margin-top: auto;
}
</style>
