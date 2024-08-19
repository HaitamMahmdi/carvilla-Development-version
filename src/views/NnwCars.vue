<template>
  <main>
    <div class="container">
      <section class="newStCars">
        <Sections-tital-vue
          sectionDesc="checkout the latest cars"
          sectionTital="newest cars"
        />
        <Newest-cars-vue />
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
import FooterComVue from "../components/FooterCom.vue";
import SectionsTitalVue from "../components/SectionsTital.vue";
import NewestCarsVue from "@/components/NewestCars.vue";
export default {
  components: { NewestCarsVue, FooterComVue, SectionsTitalVue },
};
</script>

<style lang="scss" scoped>
main {
  padding-top: 210px;
  padding-bottom: 100px;
}
</style>
