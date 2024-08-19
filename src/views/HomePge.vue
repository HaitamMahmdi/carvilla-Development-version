<template>
  <main class="main">
    <section class="landing">
      <Home-component>
        <template #tital>
          <h1 class="fs-1">get your desired car in resonable price</h1>
        </template>
        <template #contant>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </template>

        <template #button>
          <button type="button" class="btn Primrybutton">
            Counct US
          </button></template
        >
      </Home-component>
      <span></span>
      <Sech-for-cars-vue />
    </section>
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
      <section class="newStCars">
        <Sections-tital-vue
          sectionDesc="checkout the latest cars"
          sectionTital="newest cars"
        />
        <Newest-cars-vue />
      </section>
      <section class="featured-cars">
        <Sections-tital-vue
          sectionDesc="checkout the featured cars"
          sectionTital="featured cars"
        />
        <Featured-cars-vue />
      </section>

      <section class="brand">
        <Brand-cars-vue :items="carouselItems" :options="carouselOptions" />
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
import HomeComponent from "@/components/HomeComponent.vue";
import SechForCarsVue from "@/components/SechForCars.vue";
import CardsComponentVue from "@/components/CardsComponent.vue";
import NewestCarsVue from "@/components/NewestCars.vue";
import SectionsTitalVue from "@/components/SectionsTital.vue";
import FeaturedCarsVue from "@/components/FeaturedCars.vue";
import BrandCarsVue from "@/components/BrandCars.vue";
import FooterComVue from "@/components/FooterCom.vue";
//import BranscCar from "@/components/BranscCar";
export default {
  components: {
    HomeComponent,
    SechForCarsVue,
    CardsComponentVue,
    NewestCarsVue,
    SectionsTitalVue,
    FeaturedCarsVue,
    BrandCarsVue,
    FooterComVue,
  },
};
</script>

<style lang="scss" scoped>
@use "../../node_modules/bootstrap/scss/bootstrap.scss" as *;

section.landing {
  background-image: url("../assets/images/welcome-hero/welcome-banner.jpg");
  background-position: center;
  height: 120vh;
  z-index: 0;
  position: relative;
  background-repeat: no-repeat;
  span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #2a2d5499;
    width: 100%;
    height: 100%;
  }
  div.textF1 {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    margin: auto;
    text-align: center;
    color: white;
    h1 {
      margin-bottom: 50px;
      text-transform: uppercase;
      font-weight: bold;
      padding: 0 20px;
    }
    p {
      width: 50%;
      margin: auto;
      margin-bottom: 25px;
    }
    button {
      width: 250px;
      border-radius: 0;
    }
  }
  @include media-breakpoint-up("xxl") {
    & {
      max-width: 1920px;
      max-height: 709px;
      background-position: top;
      margin: auto;
    }
  }

  @include media-breakpoint-down("lg") {
    & {
      height: 165vh;
      background-size: cover;
      div.textF1 {
        top: 30%;
        p {
          width: 100%;
          padding: 0 5px;
        }
      }
    }
  }
}
section.service {
  padding: 250px 0px;
  flex-wrap: wrap;

  @include media-breakpoint-down("lg") {
    & {
      padding-top: 650px;
    }
  }
}
section.newStCars {
  padding-top: 120px;
  padding-bottom: 90px;
  background-color: #f8f9fb;
  .tital {
    margin-bottom: 80px;
  }
}
section.featured-cars {
  padding-top: 120px;
  padding-bottom: 120px;
}
section.brand {
  padding-top: 120px;
  padding-bottom: 120px;
}
footer {
  padding-top: 80px;
  background-color: #2a2d54;
  * {
    list-style: none;
    text-decoration: none;
  }
}
</style>
