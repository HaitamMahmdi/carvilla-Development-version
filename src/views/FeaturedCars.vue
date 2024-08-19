<template>
  <main>
    <div class="container">
      <section class="newStCars">
        <Sections-tital-vue
          sectionDesc="checkout the latest cars"
          sectionTital="newest cars"
        />
        <Featured-cars-vue />
      </section>
    </div>
  </main>
  <footer>
    <div class="container d-flex row m-auto">
      <Footer-com-vue elClass="col" />
    </div>
  </footer>
</template>

<script>
import FeaturedCarsVue from "@/components/FeaturedCars.vue";
import FooterComVue from "../components/FooterCom.vue";
import SectionsTitalVue from "../components/SectionsTital.vue";
export default {
  components: { FeaturedCarsVue, FooterComVue, SectionsTitalVue },
};
</script>

<style lang="scss" scoped>
main {
  padding-top: 210px;
  padding-bottom: 100px;
}
</style>
