<template>
  <main>
    <div class="container">
      <section class="service d-flex row">
        <div class="cards col- col-md-6 col-lg-4">
          <Cards-component-vue>
            <template #haeder>
              <i class="bi bi-gear mt-2"></i>
            </template>
            <template #contant>
              <h3 class="fs-4 my-3">largest dealership of car</h3>
            </template>
            <template #footer>
              <p class="fs-5">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut den fugit sed quia.
              </p>
            </template>
          </Cards-component-vue>
        </div>
        <div class="cards col- col-md-6 col-lg-4">
          <Cards-component-vue>
            <template #haeder>
              <i class="bi bi-file-earmark-text mt-2"></i>
            </template>
            <template #contant>
              <h3 class="fs-4 my-3">insurence support</h3>
            </template>
            <template #footer>
              <p class="fs-5">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut den fugit sed quia.DDD
              </p>
            </template>
          </Cards-component-vue>
        </div>
        <div class="cards col- col-md-6 col-lg-4">
          <Cards-component-vue>
            <template #haeder>
              <i class="bi bi-box2 mt-2"></i>
            </template>
            <template #contant>
              <h3 class="fs-4 my-3">unlimited repair warrenty</h3>
            </template>
            <template #footer>
              <p class="fs-5">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut den fugit sed quia.
              </p>
            </template>
          </Cards-component-vue>
        </div>
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
import CardsComponentVue from "@/components/CardsComponent.vue";
import FooterComVue from "@/components/FooterCom.vue";
import { onMounted } from "vue";
export default {
  components: { CardsComponentVue, FooterComVue },
  setup() {
    onMounted(() => {
      document
        .querySelector(`nav`)
        .style.setProperty(`background-color`, `black`);
    });
  },
};
</script>

<style lang="scss" scoped>
@use "../../node_modules/bootstrap/scss/bootstrap.scss" as *;

body {
  height: 100vh;
  main {
    padding-top: 210px;
  }
}
</style>
