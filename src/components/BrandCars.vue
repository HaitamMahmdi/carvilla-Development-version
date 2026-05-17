<template>
  <ul class="rwow">
    <li class="col" v-for="(brand, index) in data" :key="brand">
      <img :src="`/assets/images/brand/br${index + 1}.webp`" alt="" />
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
    getdata()
    return { getdata, data };
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
