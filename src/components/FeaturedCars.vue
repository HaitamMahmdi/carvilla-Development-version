<template>
  <form @click.prevent action="">
    <input v-model="ser" type="search" name="" id="" />
    <input @click="sers()" type="button" value="Search" />
  </form>
  <div class="car-continer row gap-3 justify-content-center">
    <div
      v-show="car.cars[0].name.includes(sers())"
      v-for="car in data"
      :key="car.company"
      class="card col-3 p-4"
      style="width: 18rem"
    >
      <img
        :src="getImageUrl(car.cars[0].modleImg)"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ car.cars[0].name }}</h5>
        <p class="card-text">
          <strong>{{ car.company }}</strong>
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <p><strong>model</strong>:{{ car.cars[0].model }}</p>
        </li>
        <li class="list-group-item">
          <p><strong>year</strong>:{{ car.cars[0].year }}</p>
        </li>
        <li class="list-group-item">
          <p><strong>condition</strong>:{{ car.cars[0].condition }}</p>
        </li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link"
          >Reed More <i class="first bi bi-caret-right-fill"></i
          ><i class="secnd bi bi-caret-right-fill"></i
        ></a>
      </div>
    </div>
    <div
      v-for="car in data"
      :key="car.company"
      class="card col-3 p-4"
      style="width: 18rem"
      v-show="car.cars[1].name.includes(sers())"
    >
      <img
        :src="getImageUrl(car.cars[1].modleImg)"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ car.cars[1].name }}</h5>
        <p class="card-text">
          <strong>{{ car.company }}</strong>
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <p><strong>model</strong>:{{ car.cars[1].model }}</p>
        </li>
        <li class="list-group-item">
          <p><strong>year</strong>:{{ car.cars[1].year }}</p>
        </li>
        <li class="list-group-item">
          <p><strong>condition</strong>:{{ car.cars[1].condition }}</p>
        </li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link"
          >Reed More <i class="first bi bi-caret-right-fill"></i
          ><i class="secnd bi bi-caret-right-fill"></i
        ></a>
      </div>
    </div>
    <div
      v-for="car in data"
      :key="car.company"
      class="card col-3 p-4"
      style="width: 18rem"
      v-show="car.cars[2].name.includes(sers())"
    >
      <img
        :src="getImageUrl(car.cars[2].modleImg)"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ car.cars[2].name }}</h5>
        <p class="card-text">
          <strong>{{ car.company }}</strong>
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <p><strong>model</strong>:{{ car.cars[2].model }}</p>
        </li>
        <li class="list-group-item">
          <p><strong>year</strong>:{{ car.cars[2].year }}</p>
        </li>
        <li class="list-group-item">
          <p><strong>condition</strong>:{{ car.cars[2].condition }}</p>
        </li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link"
          >Reed More <i class="first bi bi-caret-right-fill"></i
          ><i class="secnd bi bi-caret-right-fill"></i
        ></a>
      </div>
    </div>
    <div
      v-for="car in data"
      :key="car.company"
      class="card col-3 p-4"
      style="width: 18rem"
      v-show="car.cars[3].name.includes(sers())"
    >
      <img
        :src="getImageUrl(car.cars[3].modleImg)"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ car.cars[3].name }}</h5>
        <p class="card-text">
          <strong>{{ car.company }}</strong>
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <p><strong>model</strong>:{{ car.cars[3].model }}</p>
        </li>
        <li class="list-group-item">
          <p><strong>year</strong>:{{ car.cars[3].year }}</p>
        </li>
        <li class="list-group-item">
          <p><strong>condition</strong>:{{ car.cars[3].condition }}</p>
        </li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link"
          >Reed More <i class="first bi bi-caret-right-fill"></i
          ><i class="secnd bi bi-caret-right-fill"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const data = ref([]);

    const ser = ref("");
    async function getData() {
      let dataFetch = await fetch(`http://localhost:3000/companies`);
      try {
        data.value = await dataFetch.json();
      } catch {
        throw new Error("NO DATA FOUNDE");
      }
    }
    getData();
    function sers() {
      return ser.value;
    }
    const getImageUrl = (imageName) => {
      if (typeof imageName === "string") {
        return require(`../assets/images/featured-cars/${imageName}.png`);
      } else {
        return `NO IMG FOND`;
      }
    };

    return { ser, data, getImageUrl, sers };
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
