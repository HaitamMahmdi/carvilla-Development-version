<template>
  <div class="tital">
    <p class="sectionDesc">{{ sectionDesc }}</p>
    <h2 class="sectionTital">{{ sectionTital }}</h2>
    <span class="line"></span>
  </div>
</template>

<script>
export default {
  props: ["sectionDesc", "sectionTital"],
};
</script>

<style lang="scss" scoped>
.tital {
  margin: auto;
  color: #444a57;
  width: fit-content;
  text-transform: capitalize;
  .sectionDesc {
    width: fit-content;
    margin: 0 auto;
  }
  .sectionTital {
    font-size: 45px;
  }
  span {
    display: block;
    width: 40%;
    margin: auto;
    height: 3px;
    background-color: #4e4ffa;
    margin-top: 20px;
  }
}
</style>
