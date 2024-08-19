<template>
  <nav ref="nav" class="router navbar navbar-expand-lg">
    <div class="container justify-content-between">
      <router-link :to="{ name: 'Home' }" class="navbar-brand"
        >carvilla
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              :to="{ name: 'Home' }"
              class="home nav-link"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'service' }" class="nav-link px-3"
              >service</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'featuredcars' }" class="nav-link px-3"
              >featured cars</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'newestcars' }" class="nav-link px-3"
              >new cars</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'brandpage' }" class="nav-link px-3"
              >brands</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'concatpage' }" class="nav-link px-3"
              >contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const nav = ref(null);
    let link = null;
    let canva = null;
    onMounted(() => {
      link = document.querySelectorAll(`.nav-link`);
      canva = document.querySelector(`.navbar-brand`);
      let home = document.querySelector(`.home`);
      //console.log(canva);
      link.forEach((el) => {
        el.addEventListener(`click`, () => {
          el.classList.add("active");
        });
      });
      window.onscroll = () => {
        if (window.scrollY) {
          link.forEach((element) => {
            element.style.padding = "10px 5px";
          });
          canva.style.padding = "10px 5px";
          nav.value.style.backgroundColor = `black`;
        } else if (
          window.scrollY === 0 &&
          home.className.includes(`router-link-active`)
        ) {
          link.forEach((element) => {
            element.style.padding = "40px 5px";
          });
          nav.value.style.backgroundColor = `transparent`;

          canva.style.padding = "10px 5px";
        }
      };
    });

    return { nav, link, canva };
  },
};
</script>

<style lang="scss" scoped>
@use "../node_modules/bootstrap/scss/bootstrap.scss" as *;
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav.router {
  position: fixed;
  z-index: 60;
  background-color: transparent;
  width: 100%;
  transition: 0.2s;

  .nav-link,
  .navbar-brand {
    color: white;
    text-transform: uppercase;
    &:hover {
      color: #4e4ffa;
    }
  }
  .nav-link {
    font-size: 18px;
    transition: 0.5s;
    padding: 40px;
    &.active {
      color: #4e4ffa;
    }
  }
  .navbar-brand {
    font-size: 35px;
  }
  @include media-breakpoint-down("lg") {
    & {
      background-color: black !important;
      position: fixed;
      .nav-link {
        padding: 25px;
      }
    }
  }
}
</style>
