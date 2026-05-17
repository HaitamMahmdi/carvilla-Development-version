<template>
  <form @click.prevent v-if="featuredCars" action="">
    <input type="search" name="" id="" />
    <input type="button" value="Search" />
  </form>
  <div class="car-continer row gap-3 justify-content-center">
    <div v-for="car in featuredCars" :key="car" class="card col-3 p-4" style="width: 18rem">
      <img :src="`/assets/images/featured-cars/${car.modelImage}.webp`" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ car.name }}</h5>
        <p class="card-text">
          <strong>{{ car.company }}</strong>
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <p><strong>model</strong>:{{ car.modelName }}</p>
        </li>
        <li class="list-group-item">
          <p><strong>year</strong>:{{ car.year }}</p>
        </li>
        <li class="list-group-item">
          <p><strong>condition</strong>:{{ car.condition }}</p>
        </li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Reed More <i class="first bi bi-caret-right-fill"></i><i
            class="secnd bi bi-caret-right-fill"></i></a>
      </div>
    </div>


  </div>
</template>

<script>
import { useCarStore } from "@/store/carsStore";
export default {
  setup() {
    const cars = useCarStore()
    const featuredCars = cars.getFeaturedCars
    return { featuredCars }
  },
};
</script>

<style lang="scss" scoped>
form {
  width: fit-content;
  margin: 40px auto;

  [type="search"],
  [type="button"] {
    border: 1px solid #ddd;
    padding: 15px;
    font-size: 18px;
  }

  [type="search"] {
    color: #4e4ffa;
  }

  [type="button"] {
    background-color: #4e4ffa;
    color: white;
  }
}

.car-continer {
  .card {
    cursor: pointer;
    position: relative;
    transition: 0.3s;
    top: 0;

    li {
      transition: 0.3s;
    }

    a {
      padding: 10px 5px;
      text-decoration: none;

      i.first,
      i.secnd {
        color: #4e4efa93;
        animation-duration: 0.9s;
        animation-iteration-count: infinite;
        animation-fill-mode: backwards;
      }

      i.secnd {
        animation-delay: 0.1s;
      }
    }

    &:hover {
      top: -10px;
      background-color: #4e4ffa;

      ul {
        border-color: white;

        li {
          background-color: #4e4ffa;
        }
      }

      p,
      h5,
      a {
        color: white;
      }

      a {
        i {
          animation-name: arrow;
        }
      }
    }
  }
}

@keyframes arrow {
  from {
    color: #4e4efa93;
  }

  to {
    color: white;
  }
}
</style>
