<template>
  <ul class="rwow">
    <li class="col" v-for="brand in data" :key="brand">
      <img :src="getImg(brand.brandLogo)" alt="" />
    </li>
  </ul>
</template>

<script>
//<li><img :src="getImg(data.companies[0].brandLogo)" alt="" /></li>
import { ref } from "vue";
export default {
  setup() {
    const data = ref();
    async function getdata() {
      let datafteh = await fetch("http://localhost:3000/companies");
      return (data.value = await datafteh.json());
    }
    getdata();
    function getImg(imgName) {
      return require(`../assets/images/brand/${imgName}.png`);
    }
    return { getdata, data, getImg };
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  width: fit-content;
  margin: auto;
  flex-wrap: wrap;
  justify-content: center;
  li {
    padding: 40px 15px;
  }
}
</style>
