<script>
import { useCarStore } from '@/store/carsStore';
export default {
  setup() {
    const carSore = useCarStore()
    const newestCars = carSore.getNewestCar
    console.log(newestCars)
    return { newestCars };
  },
};
</script>

<template>
  <div id="carouselExampleIndicators" class="carousel slide se" data-bs-ride="carousel" data-bs-interval="3000">
    <div id="indicators" class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div ref="carousel" class="carousel-inner">
      <div v-for="(car, index) in newestCars" :key="car" :class="{ active: index === 0 }" class="carousel-item  ">
        <div class="box item">
          <div>
            <img :src="`/assets/images/new-cars-model/${car.modelImage}.webp`" alt="" />
          </div>
          <ul class="carDitals">
            <li>
              <h3 class="companyName">
                <strong>company:</strong>{{ car.company }}
              </h3>
              <ul>

                <li>
                  <p><strong>model: </strong>{{ car.modelName }}</p>
                </li>
                <li>
                  <p><strong>year:</strong> {{ car.year }}</p>
                </li>
                <li>
                  <p>
                    <strong>condition:</strong>{{ car.condition }}
                  </p>
                </li>
                <li>
                  <p><strong>price: </strong>{{ car.price }}$</p>
                </li>
                <li>
                  <p>
                    <strong>description: </strong>{{ car.description }}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev b-prev" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next b-next" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>


<style lang="scss" scoped>
@use "../../node_modules/bootstrap/scss/bootstrap" as *;

.se {
  padding: 40px;

  .box {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    div,
    ul {
      flex-basis: 50%;
    }

    div {
      height: 393px;

      img {
        width: 100%;
        height: 300px;
      }
    }

    @include media-breakpoint-down("lg") {
      & {
        flex-direction: column;

        div,
        ul {
          text-align: center;
          flex-basis: 100%;
        }
      }
    }
  }

  #indicators {
    [data-bs-target="#carouselExampleIndicators"] {
      background-color: #4e4ffa;
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
  }
}
</style>
