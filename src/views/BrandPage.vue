<template>
  <div class="container">
    <section class="brand">
      <Brand-cars-vue :items="carouselItems" :options="carouselOptions" />
    </section>
  </div>
</template>

<script>
import BrandCarsVue from "@/components/BrandCars.vue";
import { onMounted } from "vue";
export default {
  components: { BrandCarsVue },
  setup() {
    onMounted(() => {
      document.querySelector(`nav`).style.backgroundColor = `black`;
    });
  },
};
</script>

<style lang="scss" scoped>
body {
  height: 100vh;
  .container {
    padding-top: 210px;
  }
}
</style>
